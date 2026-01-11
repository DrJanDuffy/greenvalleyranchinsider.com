import {
  Experimental_Agent as Agent,
  stepCountIs,
  tool,
  generateObject,
  generateText
} from 'ai';
import {
  FormSchema,
  QualificationSchema,
  qualificationSchema
} from '@/lib/types';
import { sendSlackMessageWithButtons } from '@/lib/slack';
import { z } from 'zod';
import { exa } from '@/lib/exa';

/**
 * Qualify the lead
 * Special logic: If address contains "Mystic Bay" or zip is "89052", mark as HIGH_PRIORITY_SELLER
 */
export async function qualify(
  lead: FormSchema,
  research: string
): Promise<QualificationSchema> {
  // Check for Mystic Bay address or 89052 zip code in message/address field
  const addressField = lead.message || lead.company || '';
  const containsMysticBay = addressField.toLowerCase().includes('mystic bay');
  const contains89052 = addressField.includes('89052') || lead.message?.includes('89052');
  
  // If high priority criteria met, automatically categorize
  if (containsMysticBay || contains89052) {
    return {
      category: 'HIGH_PRIORITY_SELLER',
      reason: `High-priority seller identified: ${containsMysticBay ? 'Mystic Bay resident' : ''} ${contains89052 ? '89052 zip code' : ''}. Premium neighborhood with luxury appeal.`
    };
  }

  const { object } = await generateObject({
    model: 'openai/gpt-5',
    schema: qualificationSchema,
    prompt: `Qualify the lead and give a reason for the qualification based on the following information: LEAD DATA: ${JSON.stringify(
      lead
    )} and RESEARCH: ${research}

    Pay special attention to:
    - Addresses in Mystic Bay, The Cottages, or GVR Estates
    - Zip code 89052 (Green Valley Ranch, Henderson NV)
    - Seller intent or home valuation requests
    - Proximity to The District at Green Valley Ranch
    `
  });

  return object;
}

/**
 * Write an email
 */
export async function writeEmail(
  research: string,
  qualification: QualificationSchema
) {
  const { text } = await generateText({
    model: 'openai/gpt-5',
    prompt: `Write an email for a ${
      qualification.category
    } lead based on the following information: ${JSON.stringify(research)}`
  });

  return text;
}

/**
 * Send the research and qualification to the human for approval in slack
 */
export async function humanFeedback(
  research: string,
  email: string,
  qualification: QualificationSchema
) {
  const isHighPriority = qualification.category === 'HIGH_PRIORITY_SELLER';
  const priorityEmoji = isHighPriority ? '🚨' : '📧';
  const priorityAlert = isHighPriority 
    ? '\n\n🚨 *HOT LEAD: Mystic Bay Homeowner Researching Value* 🚨\n' 
    : '';
  
  const message = `${priorityEmoji} *New Lead Qualification*${priorityAlert}\n\n*Email:* ${email}\n*Category:* ${
    qualification.category
  }\n*Reason:* ${qualification.reason}\n\n*Research:*\n${research.slice(
    0,
    500
  )}...\n\n*Please review and approve or reject this email*`;

  const slackChannel = process.env.SLACK_CHANNEL_ID || '';

  return await sendSlackMessageWithButtons(slackChannel, message);
}

/**
 * Send an email
 */
export async function sendEmail(email: string) {
  /**
   * send email using provider like sendgrid, mailgun, resend etc.
   */
}

/**
 * ------------------------------------------------------------
 * Agent & Tools
 * ------------------------------------------------------------
 */

/**
 * Fetch tool
 */
export const fetchUrl = tool({
  description: 'Return visible text from a public URL as Markdown.',
  inputSchema: z.object({
    url: z.string().describe('Absolute URL, including http:// or https://')
  }),
  execute: async ({ url }) => {
    const result = await exa.getContents(url, {
      text: true
    });
    return result;
  }
});

/**
 * CRM Search tool
 */
export const crmSearch = tool({
  description:
    'Search existing Vercel CRM for opportunities by company name or domain',
  inputSchema: z.object({
    name: z
      .string()
      .describe('The name of the company to search for (e.g. "Vercel")')
  }),
  execute: async ({ name }) => {
    // fetch from CRM like Salesforce, Hubspot, or Snowflake, etc.
    return [];
  }
});

/**
 * Tech-stack analysis tool
 */
export const techStackAnalysis = tool({
  description: 'Return tech stack analysis for a domain.',
  inputSchema: z.object({
    domain: z.string().describe('Domain, e.g. "vercel.com"')
  }),
  execute: async ({ domain }) => {
    // fetch the tech stack for the domain
    return [];
  }
});

/**
 * Search tool
 */
const search = tool({
  description: 'Search the web for information',
  inputSchema: z.object({
    keywords: z
      .string()
      .describe(
        'The entity to search for (e.g. "Apple") — do not include any Vercel specific keywords'
      ),
    resultCategory: z
      .enum([
        'company',
        'research paper',
        'news',
        'pdf',
        'github',
        'tweet',
        'personal site',
        'linkedin profile',
        'financial report'
      ])
      .describe('The category of the result you are looking for')
  }),
  execute: async ({ keywords, resultCategory }) => {
    /**
     * Deep research using exa.ai
     * Return the results in markdown format
     */
    const result = await exa.searchAndContents(keywords, {
      numResults: 2,
      type: 'keyword',
      category: resultCategory,
      summary: true
    });
    return result;
  }
});

/**
 * Query the knowledge base
 */
const queryKnowledgeBase = tool({
  description: 'Query the knowledge base for the given query.',
  inputSchema: z.object({
    query: z.string()
  }),
  execute: async ({ query }: { query: string }) => {
    /**
     * Query the knowledge base for the given query
     * - ex: pull from turbopuffer, pinecone, postgres, snowflake, etc.
     * Return the context from the knowledge base
     */
    return 'Context from knowledge base for the given query';
  }
});

/**
 * Research agent
 *
 * This agent is used to research the lead and return a comprehensive report
 */
export const researchAgent = new Agent({
  model: 'openai/gpt-5',
  system: `
  You are a real estate research specialist focused on Green Valley Ranch, Henderson NV (zip code 89052). You research leads to provide comprehensive property and market insights.
  
  When researching a lead, you MUST specifically look for:
  1. Proximity to The District at Green Valley Ranch (shopping/dining center)
  2. Recent sales trends in the Henderson, NV 89052 market (last 90 days)
  3. School ratings for Vanderburg Elementary and Glen Taylor Elementary
  4. Neighborhood-specific details for Mystic Bay, The Cottages, or GVR Estates
  5. Home values, market comparisons, and luxury features
  6. Local amenities, gated community features, and lifestyle benefits
  
  You can use the tools provided to you to find information about the lead: 
  - search: Searches the web for information
  - queryKnowledgeBase: Queries the knowledge base for the given query
  - fetchUrl: Fetches the contents of a public URL
  - crmSearch: Searches the CRM for the given company name
  
  Synthesize the information you find into a comprehensive report focusing on:
  - Property value and equity potential
  - Market positioning and competitive advantages
  - Local school district information
  - Lifestyle and amenity highlights
  - Recent comparable sales in the area
  `,
  tools: {
    search,
    queryKnowledgeBase,
    fetchUrl,
    crmSearch
    // Removed techStackAnalysis as it's not relevant for real estate leads
  },
  stopWhen: [stepCountIs(20)] // stop after max 20 steps
});
