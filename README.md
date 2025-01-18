## __GOLD Transcript Printer Extension for Chrome__
### _Makes UCSB GOLD Unofficial Transcripts Look Pretty!_

<a href="https://chromewebstore.google.com/?hl=en-US&utm_source=ext_sidebar"><img src="https://img.shields.io/badge/Chrome_Web_Store-Dowload-blue?logo=chromewebstore&logoColor=white" alt="download link" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<img alt="Chrome Web Store Users" src="https://img.shields.io/chrome-web-store/users/ogffaloegjglncjfehdfplabnoondfjo" />
<img alt="Chrome Web Store Rating" src="https://img.shields.io/chrome-web-store/rating/ogffaloegjglncjfehdfplabnoondfjo" />
<img alt="Chrome Web Store Last Updated" src="https://img.shields.io/chrome-web-store/last-updated/nccfelhkfpbnefflolffkclhenplhiab" />

<img src="https://i.ibb.co/dgd5wxq/screenshot1-clipped.jpg"  alt="before and after image" />

## __Description__

I created this extension to improve the way unofficial transcripts are printed in GOLD. 

Functionally, the extension runs a script to modify certain HTML elements, then applies a stylesheet that dictates how the page should look when printed. Due to the relative simplicity of the extension, it should be easy to port to other browsers. I don't plan to do this, but others are welcome to do so. I only licensed under GPL-3 to prevent people from charging money for it.

## __Usage__

The extension can be installed from either the [Chrome Web Store](https://chromewebstore.google.com/?hl=en-US&utm_source=ext_sidebar) or [from source](#loading-extension-from-source)

Use the "Print Transcript" button in the top right corner of the page or 'ctrl+p' to print your transcript.

If you encounter issues or see anything that could be improved, feel free to open an issue or submit a PR. I do not check email.

## __Loading Extension From Source__

For development reasons, you may choose to load the extension into Chrome directly rather than downloading it from the Chrome web store.

1. Open the Chrome extension manager in your browser: chrome://extensions/
2. Turn on "Developer Mode"
3. Select "Load unpacked" and choose the local directory containing the source files

You should now see the GOLD Transcript Printer extension listed with your other extensions.

Select "service worker" to access the debug console for the extension.
