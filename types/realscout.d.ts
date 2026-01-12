// TypeScript declarations for RealScout web components

declare namespace JSX {
  interface IntrinsicElements {
    'realscout-home-value': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string;
        'include-name'?: boolean;
        'include-phone'?: boolean;
      },
      HTMLElement
    >;
  }
}
