export const dummy = {
  object: [
    {
      answer: 1,
      answerExplaination: "TCP operates at the transport layer, providing host-to-host connectivity.",
      choices: [
        "Transport layer",
        "Network layer",
        "Application layer",
        "Physical layer"
      ],
      question: "At which layer of the Internet model does TCP operate?"
    },
    {
      answer: 2,
      answerExplaination: "TCP handles handshaking and transmission details, abstracting the network connection for the application.",
      choices: [
        "Managing IP addresses",
        "Handling handshaking and transmission details",
        "Defining physical connections",
        "Encrypting data"
      ],
      question: "What is one of the primary functions of TCP at the transport layer?"
    },
    {
      answer: 0,
      answerExplaination: "TCP detects packet loss, duplication, and out-of-order delivery, requesting re-transmission and re-arranging data.",
      choices: [
        "Detecting and correcting packet loss and reordering",
        "Optimizing network routing",
        "Converting domain names to IP addresses",
        "Managing hardware connections"
      ],
      question: "What does TCP do to handle issues like packet loss, duplication, or out-of-order delivery?"
    },
    {
      answer: 3,
      answerExplaination: "TCP is optimized for accurate delivery, which can lead to longer delays.",
      choices: [
        "Voice over IP",
        "Online gaming",
        "Video conferencing",
        "File Transfer Protocol"
      ],
      question: "Which of the following applications is NOT particularly suitable for TCP?"
    },
    {
      answer: 2,
      answerExplaination: "TCP uses positive acknowledgment with re-transmission to ensure reliable delivery.",
      choices: [
        "Negative acknowledgment",
        "Data compression",
        "Positive acknowledgment with re-transmission",
        "Error correction codes"
      ],
      question: "What technique does TCP use to ensure reliable byte stream delivery?"
    },
    {
      answer: 1,
      answerExplaination: "The sender re-transmits a packet if the acknowledgment is not received before the timer expires.",
      choices: [
        "To speed up data transfer",
        "In case a packet gets lost or corrupted",
        "To prioritize certain types of data",
        "To manage network congestion"
      ],
      question: "Why does the TCP sender maintain a timer for each sent packet?"
    },
    {
      answer: 0,
      answerExplaination: "IP handles the actual delivery of data, while TCP manages the segments.",
      choices: [
        "IP",
        "TCP",
        "HTTP",
        "FTP"
      ],
      question: "Which protocol handles the actual delivery of data, while TCP keeps track of segments?"
    },
    {
      answer: 2,
      answerExplaination: "The internet layer encapsulates TCP segments into IP packets.",
      choices: [
        "TCP segment",
        "Ethernet frame",
        "IP packet",
        "HTTP request"
      ],
      question: "Into what does the internet layer software encapsulate each TCP segment?"
    },
    {
      answer: 3,
      answerExplaination: "TCP re-assembles segments at the destination, ensuring correct order and error-free delivery.",
      choices: [
        "Encrypting the data",
        "Compressing the data",
        "Forwarding the segments immediately",
        "Re-assembling the segments"
      ],
      question: "What does the TCP software in the transport layer do when the client program receives the segments?"
    },
    {
      answer: 1,
      answerExplaination: "TCP is optimized for accurate delivery, which can incur delays.",
      choices: [
        "Timely delivery",
        "Accurate delivery",
        "Encrypted delivery",
        "Compressed delivery"
      ],
      question: "TCP is optimized for which type of delivery?"
    },
    {
      answer: 0,
      answerExplaination: "TCP minimizes network congestion to reduce packet loss and other issues.",
      choices: [
        "Minimize network congestion",
        "Maximize data throughput",
        "Prioritize certain types of data",
        "Encrypt all data transmissions"
      ],
      question: "What does TCP help minimize to reduce the occurrence of packet loss and other problems?"
    },
    {
      answer: 2,
      answerExplaination: "If data remains undelivered, the source is notified of the failure.",
      choices: [
        "The data is automatically rerouted",
        "The connection is terminated silently",
        "The source is notified of the failure",
        "The data is stored for later delivery"
      ],
      question: "What happens if the data remains undelivered by TCP?"
    },
    {
      answer: 3,
      answerExplaination: "TCP abstracts the application's communication from the underlying networking details.",
      choices: [
        "Managing hardware connections",
        "Optimizing network routing",
        "Converting domain names to IP addresses",
        "Abstracting the application's communication from networking details"
      ],
      question: "What does TCP abstract the application's communication from?"
    },
    {
      answer: 1,
      answerExplaination: "Email is one of the internet applications that uses TCP.",
      choices: [
        "Voice over IP",
        "Email",
        "Online Gaming",
        "Video Conferencing"
      ],
      question: "Which of the following internet applications uses TCP extensively?"
    },
    {
      answer: 0,
      answerExplaination: "TCP can incur relatively long delays while waiting for re-transmissions.",
      choices: [
        "Relatively long delays",
        "Minimal delays",
        "No delays",
        "Variable delays"
      ],
      question: "What type of delays can TCP incur while waiting for out-of-order messages or re-transmissions?"
    },
    {
      answer: 2,
      answerExplaination: "RTP over UDP is recommended for real-time applications like voice over IP.",
      choices: [
        "TCP",
        "HTTP",
        "RTP over UDP",
        "FTP"
      ],
      question: "Which protocol is usually recommended for real-time applications such as voice over IP?"
    },
    {
      answer: 1,
      answerExplaination: "TCP guarantees that all bytes received will be identical and in the same order as those sent.",
      choices: [
        "Bytes may be altered during transmission",
        "All bytes received will be identical and in the same order as those sent",
        "Bytes may be received out of order",
        "Some bytes may be lost during transmission"
      ],
      question: "What does TCP guarantee about the bytes received?"
    },
    {
      answer: 3,
      answerExplaination: "TCP divides the file into segments for efficient routing through the network.",
      choices: [
        "Encrypting the file",
        "Compressing the file",
        "Sending the file as a single unit",
        "Dividing the file into segments"
      ],
      question: "When an HTML file is sent from a web server, what does the TCP software layer do with the file?"
    },
    {
      answer: 0,
      answerExplaination: "The destination IP address is included in the IP header.",
      choices: [
        "Destination IP address",
        "Source MAC address",
        "Encryption key",
        "Data compression algorithm"
      ],
      question: "What information is included in the IP header that is added to each TCP segment?"
    },
    {
      answer: 2,
      answerExplaination: "Network socket interface is used by application to communicate with TCP.",
      choices: [
        "API",
        "OS kernel",
        "Network socket interface",
        "Device driver"
      ],
      question: "Typically, through what interface does an application interact with TCP?"
    },
    {
      answer: 1,
      answerExplaination: "Traffic load balancing can cause IP packets to be delivered out of order.",
      choices: [
        "Data encryption",
        "Traffic load balancing",
        "Firewall settings",
        "Cable length"
      ],
      question: "Which of the following can cause IP packets to be delivered out of order?"
    },
    {
      answer: 3,
      answerExplaination: "TCP requests re-transmission of lost data.",
      choices: [
        "Ignores the lost data",
        "Sends a warning message",
        "Terminates the connection",
        "Requests re-transmission of lost data"
      ],
      question: "What does TCP do when it detects lost data?"
    },
    {
      answer: 0,
      answerExplaination: "WWW is one of the internet applications that uses TCP.",
      choices: [
        "World Wide Web (WWW)",
        "Voice over IP",
        "Online Gaming",
        "Video Conferencing"
      ],
      question: "Which of the following internet applications uses TCP extensively?"
    },
    {
      answer: 2,
      answerExplaination: "Streaming media uses TCP.",
      choices: [
        "Voice over IP",
        "Online Gaming",
        "Streaming media",
        "Video Conferencing"
      ],
      question: "Which of the following applications uses TCP?"
    },
    {
      answer: 1,
      answerExplaination: "TCP provides a reliable byte stream delivery service.",
      choices: [
        "Unreliable datagram service",
        "Reliable byte stream delivery service",
        "Connectionless packet service",
        "Best-effort delivery service"
      ],
      question: "What type of service does TCP provide?"
    },
    {
      answer: 3,
      answerExplaination: "The sender keeps a record of each packet it sends.",
      choices: [
        "The receiver keeps a record of each packet it receives",
        "The network router keeps a record of each packet it routes",
        "The application keeps a record of each packet it sends",
        "The sender keeps a record of each packet it sends"
      ],
      question: "Who keeps a record of each packet sent in TCP?"
    },
    {
      answer: 0,
      answerExplaination: "The timer is needed in case a packet gets lost.",
      choices: [
        "In case a packet gets lost",
        "To prioritize certain types of data",
        "To manage network congestion",
        "To speed up data transfer"
      ],
      question: "Why is the timer needed in TCP?"
    },
    {
      answer: 2,
      answerExplaination: "The internet layer encapsulates each TCP segment into an IP packet.",
      choices: [
        "TCP segment",
        "Ethernet frame",
        "IP packet",
        "HTTP request"
      ],
      question: "Into what does the internet layer software encapsulate each TCP segment?"
    },
    {
      answer: 1,
      answerExplaination: "TCP ensures segments are correctly ordered.",
      choices: [
        "Encrypting the data",
        "Ensuring segments are correctly ordered",
        "Compressing the data",
        "Forwarding the segments immediately"
      ],
      question: "What does the TCP software ensure when the client program receives the segments?"
    },
    {
      answer: 0,
      answerExplaination: "TCP provides a communication service at an intermediate level between an application program and the Internet Protocol.",
      choices: [
        "Between an application program and the Internet Protocol",
        "Between the operating system and the hardware",
        "Between the user and the application program",
        "Between two hardware devices"
      ],
      question: "At what level does TCP provide a communication service?"
    }
  ],
}
