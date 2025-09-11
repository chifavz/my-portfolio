# Blog Setup Instructions

The portfolio has been configured to redirect to an external blog. Here's how to set it up:

## Quick Setup

1. Open `src/components/BlogLayout.js`
2. Find line 6: `const EXTERNAL_BLOG_URL = 'https://your-blog-site.com';`
3. Replace `'https://your-blog-site.com'` with your actual blog URL

## Example URLs

```javascript
// For Medium
const EXTERNAL_BLOG_URL = 'https://medium.com/@yourusername';

// For Dev.to
const EXTERNAL_BLOG_URL = 'https://dev.to/yourusername';

// For Personal blog
const EXTERNAL_BLOG_URL = 'https://yourblog.com';

// For Hashnode
const EXTERNAL_BLOG_URL = 'https://yourusername.hashnode.dev';
```

## How It Works

- When users click "Blog" in the navigation or any blog links, they are automatically redirected to your external blog
- The redirect uses `window.location.href` for immediate navigation
- A fallback link is provided for users whose browsers might block the automatic redirect
- All other portfolio functionality remains unchanged

## Testing

After updating the URL:
1. Run `npm start` to test locally
2. Click the "Blog" link in navigation
3. Verify you're redirected to your blog site
4. Run `npm run build` to ensure everything builds correctly

## Reverting (Optional)

If you ever want to go back to an internal blog system, you can restore the original `BlogLayout.js` from git history and restore the associated blog components.