const PRINT_URL = "my.sa.ucsb.edu/gold/UnofficialTranscript.aspx"


// Called on tab updates
async function tab_update_callback(tabId, changeInfo, tab) {
	
	// A tab finished loading
	if (changeInfo.status == "complete") {
		
		// The tab is a transcript print window
		if (String(tab.url).slice( String(tab.url).indexOf("://")+3 ).startsWith(PRINT_URL)) {
			console.log("Transcript Window Detected. Injecting Scripts..")

			inject_script(tabId)
		}
	}
}


// Inject a script into some html file
async function inject_script(tabId) {
	chrome.scripting.executeScript(
		{
			files: ["inject.js"],
			target: {tabId: tabId}
		}, 
		insert_css.bind(null, tabId) // Pass tabId as additional argument
	)
}


// Apply stylesheet if JS injection was successful
async function insert_css(tabId, result) {
	
	// Check injection result
	if ((typeof result) == "object" && result.length && result[0].result == 'ok') {
		console.log("JS Injection Succeeded. Applying CSS..")

		// Apply CSS
		chrome.scripting.insertCSS({
			files: ["styles.css"],
			target:  {tabId: tabId}
		})
	}
	else {
		console.log("JS Injection Failed. Aborting..")
	}
}


// Add listener for tab updates
chrome.tabs.onUpdated.addListener(tab_update_callback);
