function startTest() {
    document.getElementById("status").innerText = "Testing...";
    
    let startTime = new Date().getTime();
    let imageSize = 5000000; // 5MB test file

    let testImage = new Image();
    testImage.src = "https://speed.hetzner.de/5MB.bin?t=" + startTime;
    
    testImage.onload = function() {
        let endTime = new Date().getTime();
        let duration = (endTime - startTime) / 1000;
        let speedMbps = ((imageSize * 8) / (1024 * 1024)) / duration;

        document.getElementById("speed").innerText = speedMbps.toFixed(2) + " Mbps";
        document.getElementById("status").innerText = "Test complete!";
    };

    testImage.onerror = function() {
        document.getElementById("status").innerText = "Error in speed test. Try again.";
    };
}

