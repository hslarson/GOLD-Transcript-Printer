const PRINT_HOSTNAME = "my.sa.ucsb.edu"
const PRINT_PATH = "/gold/UnofficialTranscript.aspx"


// Called on tab updates
function tab_update_callback(tabId, changeInfo, tab) {
    try {
        // Check if the tab finished loading
        if (changeInfo.status === "complete" && tab.url) {
            // Check if URL matches GOLD's unofficial transcript page
            const url = new URL(tab.url);
            if (url.hostname === PRINT_HOSTNAME && url.pathname === PRINT_PATH) {
                // Insert custom script & stylesheet
                console.info("Transcript Window Detected. Injecting Scripts...");
                inject_script(tabId)
            }
        }
    } catch (error) {
        console.error("Error in tab_update_callback:", error);
    }
}
 

// Inject JavaScript into the transcript webpage
function inject_script(tabId) {
    chrome.scripting.executeScript({
        files: ["inject.js"],
        target: {tabId: tabId}
    }, 
    (result) => {
        if (chrome.runtime.lastError) {
            console.error("JS Injection Failed (Runtime Error):", chrome.runtime.lastError);
        } else if (!result || result.length === 0 || result[0].result !== "ok") {
            console.error("JS Injection Failed (Bad Result):", result);
        } else {
            console.info("JS Injection Succeeded. Applying CSS...");
            insert_css(tabId);
        }
    });
}


// Load custom CSS stylesheet
function insert_css(tabId) {
    chrome.scripting.insertCSS({
        files: ["styles.css"],
        target: { tabId: tabId }
    }, 
    () => {
        if (chrome.runtime.lastError) {
            console.error("CSS Injection Failed ():", chrome.runtime.lastError);
        } else {
            console.info("CSS Injection Completed. Ready to Print!");
        }
    });
}


// Add listener for tab updates
chrome.tabs.onUpdated.addListener(tab_update_callback);
