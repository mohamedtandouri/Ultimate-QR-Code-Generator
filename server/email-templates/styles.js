
// Design tokens matching the app's theme (Slate + Blue)
export const theme = {
  colors: {
    background: '#F1F5F9', // Slate 100
    card: '#FFFFFF',
    text: {
      primary: '#020817', // Slate 950
      secondary: '#64748B', // Slate 500
      tertiary: '#94A3B8', // Slate 400
    },
    primary: '#3B82F6', // Blue 500
    border: '#E2E8F0', // Slate 200
    success: '#10B981',
    error: '#EF4444',
  },
  fonts: {
    main: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
  },
  borderRadius: '12px',
};

// CSS Strings for inline usage
export const styles = {
  body: `
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    width: 100%;
  `,
  container: `
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: ${theme.spacing.xxl} ${theme.spacing.md};
  `,
  card: `
    background-color: ${theme.colors.card};
    border-radius: ${theme.borderRadius};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid ${theme.colors.border};
    overflow: hidden;
  `,
  header: `
    padding: ${theme.spacing.xl};
    text-align: center;
    border-bottom: 2px solid ${theme.colors.primary};
  `,
  content: `
    padding: ${theme.spacing.xl};
  `,
  footer: `
    padding: ${theme.spacing.lg};
    text-align: center;
    color: ${theme.colors.text.tertiary};
    font-size: 12px;
    background-color: #F8FAFC;
    border-top: 1px solid ${theme.colors.border};
  `,
  h1: `
    color: ${theme.colors.text.primary};
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.025em;
  `,
  h2: `
    color: ${theme.colors.text.primary};
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 ${theme.spacing.md} 0;
    letter-spacing: -0.025em;
  `,
  text: `
    color: ${theme.colors.text.primary};
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 ${theme.spacing.md} 0;
  `,
  subtext: `
    color: ${theme.colors.text.secondary};
    font-size: 14px;
    line-height: 1.5;
  `,
  link: `
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
  `,
  button: `
    display: inline-block;
    background-color: ${theme.colors.primary};
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    margin: ${theme.spacing.md} 0;
  `,
};
