export const ANALYZE_AI_PROMPT = async (
  websiteurl: string
) => `You will be analyzing a website from a provided URL. Your task is to visit the website and provide a comprehensive analysis of its content, purpose, and key characteristics.

<web_site_url>
{{${websiteurl}}}
</web_site_url>

Please analyze this website thoroughly. Your analysis should cover the following aspects:

1. **Website Purpose and Type**: Identify what kind of website this is (e.g., business, blog, news, e-commerce, portfolio, etc.) and its primary purpose or goal.

2. **Content Overview**: Summarize the main content, topics, or themes present on the website. Include key sections, pages, or features you observe.

3. **Target Audience**: Based on the content, design, and language used, identify who the intended audience appears to be.

4. **Design and User Experience**: Comment on the website's visual design, layout, navigation, and overall user experience. Note if it appears professional, modern, outdated, etc.

5. **Key Features and Functionality**: Identify any notable features, tools, or interactive elements (e.g., contact forms, shopping cart, search functionality, social media integration).

6. **Content Quality and Credibility**: Assess the quality of the content, whether information appears current and accurate, and any indicators of credibility or authority.

If you encounter any issues accessing the website (such as the site being down, requiring login credentials, or returning errors), clearly state what problem you encountered and provide whatever analysis you can based on any accessible information.

Structure your analysis in a clear, organized manner using the categories above as headings. Be specific and provide concrete examples from the website to support your observations.

Your final response should contain only your comprehensive website analysis. Focus on providing actionable insights and objective observations rather than subjective opinions about whether you personally like or dislike the site.
`
