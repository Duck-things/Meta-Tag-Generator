// Grab all the inputs
const siteTitle = document.getElementById('siteTitle');
const siteDescription = document.getElementById('siteDescription');
const siteUrl = document.getElementById('siteUrl');
const siteImage = document.getElementById('siteImage');
const siteName = document.getElementById('siteName');
const twitterHandle = document.getElementById('twitterHandle');

// Function to update all previews
function updatePreviews() {
    // Get values (or use defaults if empty)
    const title = siteTitle.value || 'Your Site Title';
    const desc = siteDescription.value || 'Your site description will appear here...';
    const url = siteUrl.value || 'https://yoursite.com';
    const image = siteImage.value;
    const name = siteName.value || 'Site Name';

    // Update Google preview
    document.getElementById('googleTitle').textContent = title;
    document.getElementById('googleDesc').textContent = desc;
    document.getElementById('googleUrl').textContent = url;

    // Update Twitter preview
    document.getElementById('twitterTitle').textContent = title;
    document.getElementById('twitterDesc').textContent = desc;
    document.getElementById('twitterUrl').textContent = url.replace('https://', '').replace('http://', '');

    // Update Discord preview
    document.getElementById('discordTitle').textContent = title;
    document.getElementById('discordDesc').textContent = desc;
    document.getElementById('discordSitename').textContent = name;

    // Update images if URL provided
    if (image) {
        document.getElementById('twitterImage').innerHTML = '<img src="' + image + '" style="width:100%; height:100%; object-fit:cover;">';
        document.getElementById('discordImage').innerHTML = '<img src="' + image + '" style="width:100%; height:100%; object-fit:cover; border-radius:4px;">';
    } else {
        document.getElementById('twitterImage').textContent = 'No image';
        document.getElementById('discordImage').textContent = 'No image';
    }
}

// Listen for typing on ALL inputs
siteTitle.addEventListener('input', updatePreviews);
siteDescription.addEventListener('input', updatePreviews);
siteUrl.addEventListener('input', updatePreviews);
siteImage.addEventListener('input', updatePreviews);
siteName.addEventListener('input', updatePreviews);
twitterHandle.addEventListener('input', updatePreviews);
// Function to generate meta tag code
function generateMetaTags() {
    const title = siteTitle.value || 'Your Site Title';
    const desc = siteDescription.value || 'Your site description';
    const url = siteUrl.value || 'https://yoursite.com';
    const image = siteImage.value || 'https://yoursite.com/image.png';
    const name = siteName.value || 'Site Name';
    const twitter = twitterHandle.value || '@username';

    const code = `<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${desc}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${image}">
<meta property="og:site_name" content="${name}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url}">
<meta property="twitter:title" content="${title}">
<meta property="twitter:description" content="${desc}">
<meta property="twitter:image" content="${image}">
<meta name="twitter:creator" content="${twitter}">`;

    document.getElementById('codeOutput').textContent = code;
}

// Update meta tags when typing too
siteTitle.addEventListener('input', generateMetaTags);
siteDescription.addEventListener('input', generateMetaTags);
siteUrl.addEventListener('input', generateMetaTags);
siteImage.addEventListener('input', generateMetaTags);
siteName.addEventListener('input', generateMetaTags);
twitterHandle.addEventListener('input', generateMetaTags);

// Copy button functionality
document.getElementById('copyBtn').addEventListener('click', function() {
    const code = document.getElementById('codeOutput').textContent;
    navigator.clipboard.writeText(code);
    
    // Change button text temporarily
    this.textContent = '✅ Copied!';
    setTimeout(() => {
        this.textContent = '📋 Copy to Clipboard';
    }, 2000);
});

// Generate on page load
generateMetaTags();