import { NextResponse } from 'next/server';
import { exa } from '@/lib/exa';

/**
 * API route to fetch information about the office location
 * Uses Exa AI to search for information about the address
 */
export async function GET() {
  try {
    const address = '360 Mike Koizumi Way, Henderson, NV 89011';
    
    // Base response data
    const baseData = {
      address: {
        street: '360 Mike Koizumi Way',
        city: 'Henderson',
        state: 'NV',
        zip: '89011',
        full: address,
      },
      coordinates: {
        lat: 36.0395,
        lng: -115.0442,
      },
      nearby: {
        description: 'Located in Henderson, Nevada, in the Green Valley area near Green Valley Ranch.',
        amenities: [
          'The District at Green Valley Ranch (shopping & dining)',
          'Green Valley Ranch Resort & Spa',
          'I-215 freeway access',
          'Multiple parks and recreational facilities',
        ],
      },
    };

    // Only fetch from Exa if API key is available
    if (process.env.EXA_API_KEY) {
      try {
        // Search for information about this address
        const searchResults = await exa.searchAndContents(
          `360 Mike Koizumi Way Henderson Nevada 89011 real estate office Berkshire Hathaway`,
          {
            numResults: 5,
            type: 'keyword',
            category: 'company',
            summary: true,
          }
        );

        // Also search for general location information
        const locationInfo = await exa.searchAndContents(
          `Henderson Nevada 89011 Green Valley Ranch area amenities nearby`,
          {
            numResults: 3,
            type: 'keyword',
            category: 'news',
            summary: true,
          }
        );

        return NextResponse.json({
          ...baseData,
          officeInfo: searchResults,
          locationInfo: locationInfo,
        });
      } catch (exaError) {
        console.error('Exa API error:', exaError);
        // Return base data if Exa fails
        return NextResponse.json(baseData);
      }
    }

    // Return base data if Exa is not configured
    return NextResponse.json(baseData);
  } catch (error) {
    console.error('Error in location API route:', error);
    return NextResponse.json(
      {
        address: {
          street: '360 Mike Koizumi Way',
          city: 'Henderson',
          state: 'NV',
          zip: '89011',
          full: '360 Mike Koizumi Way, Henderson, NV 89011',
        },
        error: 'Failed to fetch location data',
      },
      { status: 500 }
    );
  }
}
