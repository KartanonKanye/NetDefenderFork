interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: {};
}

// explanation part needs to be changed
const Week1Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which type of attack renders a website unusable for legitimate users?',
    options: ['Denial of Service', 'Worm', 'Packet Sniffing'],
    correctAnswer: 'Denial of Service',
    explanation:
      {'Denial of Service': 'When a DoS attack occurs, it can be stopped by identifying the host sending the traffic and terminating their connection to the server.\n \nWhen multiple sources generate traffic, it is classified as a Distributed Denial of Service (DDoS) attack.\n\nDDoS attacks are especially challenging to detect and defend against, as there can be many hosts.\n\nSome ways to prevent DoS attacks are by monitoring and analysing network traffic, and implementing a firewall and intrusion detection system.',
        'Worm': 'Worms are a type of malicious software that can spread around the network without any human interaction.\n \n When the worm is spreading through a network it does consume the networks resources, reducing bandwith, but there are more efficient ways slow down a network and prevent legitimate users from accessing it. ',
        'Packet Sniffing': 'Packet sniffing is the act of capturing and analysing the traffic on a network. This can be used to intercept private information from the network that the attacker can later utilise. This by itself has little impact on network performance.'
      }
  },
  {
    id: 2,
    question: 'Which type of attack involves injecting packets with false source addresses?',
    options: ['Trojan Horse', 'Man-in-the-Middle', 'Masquerading'],
    correctAnswer: 'Masquerading',
    explanation:{
      'Masquerading': 'Packets with fake source addresses, can be sent to receivers. This makes it difficult to determine who the sender is or where the attack came from.\n\nThis type of attack can be prevented by using End-point authentication. End-point authentication allows receivers to ensure they are receiving packets from a legitimate source.\n\nYou will learn more about end-point authentication in later missions.',
      'Trojan Horse': 'A Trojan Horse attack involves spreading software that on the surface seems legitimate, but it has a hidden process that runs in the background causing damage to the host or network.',
      'Man-in-the-Middle': 'In Man-in-the-Middle attacks the attacker resides on one of the nodes that belong to the network\'s communication path. The packets that travel through the node can be modified or deleted by the attacker.'
    }
    },
  {
    id: 3,
    question:
      'What is the term for a malicious third party detecting, reading and recording the data sent over a network?',
    options: ['Botnet', 'Ransomware', 'Packet Sniffing'],
    correctAnswer: 'Packet Sniffing',
    explanation: {
      'Packet Sniffing':'Security vulnerabilities exist when data is sent over a network to wirelessly-connected devices.\n\nMalicious third parties can access the traffic across a network and analyze packets sent, packet content, private/sensitive information, connection habits, social ties and patterns.\n\nIn order to prevent this, online traffic should be encrypted. This can be done using a VPN, SSL, PGP and other methods that will be discussed in future missions.',
      'Botnet': 'Botnets are a group of compromised hosts that are utilised for spam e-mails or distributed denial-of-service attacks.',
      'Ransomware': 'A type of malware that encrypts all the data on the host machine. In order for the victim to recover their data, they must pay the attacker to get the decryption key.'
    }
  },
  {
    id: 4,
    question: 'What measure could prevent against Packet Sniffing?',
    options: [
      'Making sure each user on the network is authenticated',
      'Trojan Horse',
      'Encryption of packets',
      'Increasing the size of all the packets sent'
    ],
    correctAnswer: 'Encryption of packets',
    explanation: {
      'Encryption of packets': 'If encrypted packets are intercepted, it is not easy to understand the information contained in them. This allows information to be kept safe from malicious third-parties.',
      'Making sure each user on the network is authenticated': 'If every user on the network is authenticated we presumably do not have a malicious actor on the network. However, people change, and a person can abuse the trust given to them in certain circumstances. Therefore, we cannot prevent malicious network sniffing by authenticating users.',
      'Trojan Horse': 'A Trojan Horse is a type of cyber attack involving software and files. It does not apply to Packet Sniffing prevention measures.',
      'Increasing the size of all the packets sent': 'Even if we increase the size of our packets the attacker can still capture and observe the information inside the packets.'
    }
    },
  {
    id: 5,
    question: 'What measure could prevent against Masquerading?',
    options: ['IP Spoofing', 'End-point Authentication', 'Packet Inspection', 'DDoS Attacks'],
    correctAnswer: 'End-point Authentication',
    explanation: {
      'End-point Authentication': 'When we have implemented end-point authentication every actor and device on the network is legitimate. Any illegitimate device that tries to spoof the address of it\'s packets will be spotted. This will be explained later in the course.',
      'IP Spoofing': 'Masquerading is accomplished with IP spoofing. This is the act of injecting a packet with a fake source and destination address and harmful content.',
      'Packet Inspection': 'When we inspect a packet, how can we tell if the addresses in it\'s header are legitimate? We need some other method to make sure the packet actually comes from the device it claim',
      'DDoS Attacks': 'This is a type of attack where a botnet floods the network with requests so legitimate users can\'t access it.'
    }
    }
];

const Week2Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: 'Alice is building a website and wants to encrypt the passwords of users. Is SHA-1 a suitable hash function for this purpose?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
    explanation: {
     'No': 'SHA-1 is not as safe as other hash functions, such as SHA-2 and SHA-3. The main security concern with SHA-1 is that collisions have been produced. This can impact the security of the website, as a collision could be produced for a user and their account could be accessed. Even though a collision for SHA-1 requires a lot of resources to be produced, it is better to opt for one of the more secure hash functions available.',
     'Yes': 'There have been multiple demonstrations of researchers finding message digest collisions with SHA-1. These collisions mean that SHA-1 is not secure.'
    }
    },
  {
    id: 2,
    question: 'Asymmetric cryptography is built upon the principle that:',
    options: ['products of prime numbers can be easily factorized', 
      'the private key is never shared', 
      'it is computationally cheap to find product of prime numbers, but computationally costly to factorize the product', 
      'the product of large prime numbers cannot easily be stored in memory'],
    correctAnswer: 'it is computationally cheap to find product of prime numbers, but computationally costly to factorize the product',
    explanation: {
      'it is computationally cheap to find product of prime numbers, but computationally costly to factorize the product': 'Hash functions utilise the fact that the generation and arithmetic operations of large prime numbers is relatively easy for modern computers. Therefore, two large prime number will serve as the public and private keys when encrypting some plaintext. The public key is known to anyone, but the private key is known only to the intended recipient.In this way, it will require a large amount of resources for an attacker to find the associated private key of ciphertext, while the intended recipient can decrypt it easily.',
      'products of prime numbers can be easily factorized': 'If this was true then asymmetric cryptography would not be secure at all. We use the product of two primes to create the private and public key. If this product is easy to factorize, then all the data we encrypt could easily be decrypted by anyone.',
      'the private key is never shared': 'While this is true, it is not one of the key principles that asymmetric cryptography is built upon.',
      'the product of large prime numbers cannot be easily stored in memory': 'Asymmetric cryptogrpahy was invented in the 1970s, a time when computers had much less memory than today. If the creators of these asymmetric cryptography used the amount of memory as one of the key principles, all modern computers could easily crack these encryptions.'
    }
    },
  {
    id: 3,
    question:
      'Which of the following algorithms are used in the network layer to route packets?',
    options: ['Kruskal\'s Algorithm', 'DFS Algorithm', 'Dijkstra\'s Algorithm', 'Newton\'s Algorithm'],
    correctAnswer: 'Dijkstra\'s Algorithm',
    explanation: {
     'Dijkstra\'s Algorithm': 'The role of the network layer is to move packets from sender to receiver. Dijkstra\'s Algorithm is used to determine a shortest-path tree of all subnets in order to route packets in the network.',
     'Kruskal\'s Algorithm': 'This algorithm, when given a connected, weighted, and undirected graph, finds the graph\'s minimum spanning tree.',
     'DFS Algorithm': 'Depth-First Search is a graph traversal algorithm that starts from some node and then recursively checks all of the node\'s neighbours. The output of this algorithm is a spanning tree, since DFS does not take edge weights into account.',
     'Newton\'s Algorithm': 'Newton\'s Algorithm is used to approximate the roots of a function.'    
    }
    },
  {
    id: 4,
    question: 'What method is implemented as a solution to the Message Integrity problem?',
    options: ['Internet Checksum', 'RSA cryptography', 'Message Authentication Codes (MAC)', 'Open shortest-path first (OSPF)'],
    correctAnswer: 'Message Authentication Codes (MAC)',
    explanation:{ 
      'Message Authentication Codes (MAC)': 'A secret key is used to hash each message, resulting in a digest known as the MAC. Only the sender and receiver are supposed to know this secret key. When the receiver obtains the message, along with the MAC, they use the secrey key to hash the message. If the hash matches the MAC, it means the message has not been tampered with.',
      'Internet Checksum': 'This method is used for error detection, not to see if a message has been tampered with.',
      'RSA cryptography': 'RSA is an asymmetric key cryptography scheme that relies on prime numbers.',
      'Open shortest-path first (OSPF)': 'Dijkstra\'s algorithm is an example of an OSPF algorithm. These algorithms find the shortest distance between a starting node and all the other nodes in the network.'
    }
    },
  {
    id: 5,
    question: 'What is a shortcoming of Message Authentication Codes (MAC), as discussed in this week\'s materials?',
    options: ['Senders are not authenticated', 'Secret is known only by sender and receiver', 'Hash is sent alongside message, making filesize large', 'Hash functions are not complex enough'],
    correctAnswer: 'Senders are not authenticated',
    explanation:
    'Anyone with the secret key can send the correct MAC, so there is no way to authenticate the sender. For example, if secret keys of a company get leaked, attackers can pose as that company and send messages whose MACs match.'
  }
];

const Week3Quiz: QuizQuestion[] = [
  {
    id: 1, 
    question: 'Why can\'t MACs be used as digital signatures?',
    options: ['Receiver would need a copy, so it would not be unique.', 'MAC is too large in size.', 'Not computationally feasible to use a MAC.'],
    correctAnswer: 'Receiver would need a copy, so it would not be unique.',
    explanation: 'Digital Signatures need to be unique, verifiable and non-forgeable.'
  },
  {
    id: 2, 
    question: 'What is a digital signature?',
    options: ['Writing your name electronically.', 'Cryptographic technique to verify the identity of a sender.', 'Public key to encrypt an email.'],
    correctAnswer: 'Cryptographic technique to verify the identity of a sender.',
    explanation: 'A message is encrypted with sender\'s private key. Receiver can decrypt it with sender\'s known public key, verifying that the message came from sender.'
  },
  {
    id: 3, 
    question: 'What has been implemented to enable end-point authentication?',
    options: ['Caesar Cipher', 'Certified Authorities', 'PGP Keys', 'API endpoints'],
    correctAnswer: 'Certified Authorities',
    explanation: 'Certified Authority (CA) is a trusted third-party that generates a certificate to verify the sender\'s public key.'
  },
  {
    id: 4, 
    question: 'How do Certified Authorities help with end-point authentication?',
    options: ['Receiver can use copy of sender\'s private key to decrypt message', 'Receiver can use a CA-issued certificate, along with the sender\'s public key to authenticate the sender of a message.', 'Certified Authorities use a MAC to encrypt a sender\'s message'],
    correctAnswer: 'Receiver can use a CA-issued certificate, along with the sender\'s public key to authenticate the sender of a message.',
    explanation: 'Since the CA is a trusted third-party, the receiver can verify that the message indeed came from the sender, by comparing the public key of the message to the public key in the CA-certificate.'
  },
];

const Week4Quiz: QuizQuestion[] = [
  {
    id: 1, 
    question: 'Why are nonces used in SSL?',
    options: ['To protect handshake from tampering', 'To prevent connection replay attacks', 'MACs are too large in size', 'To prevent truncation attacks'],
    correctAnswer: 'To prevent connection replay attacks',
    explanation: 'A replay attack involves an attacker capturing valid network transmission. The aim is to trick the system into accepting this transmission as a valid one, at a later time. By using nonces, each valid transmission can only be performed once, as a new nonce will be generated every time.'
  },
  {
    id: 2, 
    question: 'Why are MACs computed for all handshake messages?',
    options: ['To protect handshake from tampering', 'To prevent connection replay attacks', 'MACs are too large in size', 'To prevent truncation attacks'],
    correctAnswer: 'To protect handshake from tampering',
    explanation: 'During the SSL handshake, the client and server exchange messages to negotiate parameters, authenticate each other, and establish a secure connection. In order to ensure that messages have not been tampered in transit and to authorize both parties, MACs are computed for all handshake messages. '
  },
  {
    id: 3, 
    question: 'Why is "SSL connection close" needed, in addition to TCP FIN?',
    options: ['To protect handshake from tampering', 'To prevent connection replay attacks', 'MACs are too large in size', 'To prevent truncation attacks'],
    correctAnswer: 'To prevent truncation attacks',
    explanation: 'It is possible for an attacker to close the connection before it is actually finished, via a truncation attack. This is done by inserting a TCP code into a message, indicating the message has finished, thus preventing the recipient picking up the rest of the message. Requiring "SSL Connection Close" prevents against this type of attack.'
  },
  {
    id: 4, 
    question: 'What is implemented as a protection against packet re-ordering?',
    options: ['Message Authentication Codes (MACs)', 'Sequence Numbers', 'Secure Sockets Layer (SSL)', 'Packet Sniffing'],
    correctAnswer: 'Sequence Numbers',
    explanation: 'Packets can get lost or arrive out of the intended order. Sequence numbers allows packets to be rearranged into the correct order at the destination, if they arrive out-of-order.'
  },
  {
    id: 5, 
    question: 'Which of the following is not part of the SSL handshake?',
    options: ['Establishing TCP connection', 'Generating a Master Key', 'Truncating and re-ordering packets', 'Verifying identity of communication partner'],
    correctAnswer: 'Truncating and re-ordering packets',
    explanation: 'The SSL handshake involves establishing a TCP connection, verifying the identity of the communication partner and generating a master key'
  },
  {
    id: 6, 
    question: 'Which of the following is not a feature of PGP?',
    options: ['Utilizes the Web of Trust model', 'It is decentralized', 'Messages are encrypted and signed', 'A user can only send messages to their trusted contacts'],
    correctAnswer: 'A user can only send messages to their trusted contacts',
    explanation: 'PGP utilizes the Web of Trust model, meaning that users can have trusted contacts. This model also allows users to see trusted contacts of their trusted contacts. As such, users can verify and send messages to others outside of their trusted contacts, by relying on chains of trust.'
  },
];

const Week5Quiz: QuizQuestion[] = [
  {
    id: 1, 
    question: 'How do Private Networks (PNs) and Virtual Private Networks (VPNs) differ?',
    options: ['PN traffic goes through public internet', 'VPNs implement physical networks with routers, links and DNS infrastructure', 'VPN traffic goes through the public internet', 'PN incorporates Diffie-Hellman key exchange'],
    correctAnswer: 'VPN traffic goes through the public internet',
    explanation: 'VPN traffic is transmitted via the public internet, eliminating the need for physical network infrastructure and their high maintenance costs.'
  },
  {
    id: 2, 
    question: 'What is a benefit of using Stateful Filters?',
    options: ['It implements user authentication states in an application', 'It identifies packets that might get through stateless filters and cause harm to system', 'It allows application-specific rules for different users'],
    correctAnswer: 'It identifies packets that might get through stateless filters and cause harm to system',
    explanation: 'For example, packets with ACK=1 and source port 80 get through the filter and could be used to crash local systems with malformed ACK packets.'
  },
  {
    id: 3, 
    question: 'What is implemented during IPsec key management?',
    options: ['Diffie-Hellman key exchange', 'PGP', 'Web of Trust', 'Secure Sockets Layer (SSL)'],
    correctAnswer: 'Diffie-Hellman key exchange',
    explanation: 'Diffie-Hellman key exchange is implemented to establish a master key between entities. This takes place as a bi-directional Internet Key Exchange (IKE) Security Association (SA).'
  },
  {
    id: 4, 
    question: 'What is a disadvantage of using Application Gateways?',
    options: ['Malformatted packets can get through filter and cause harm to system', 'Performance is negatively affected, since all traffic must go through', 'Allows application-specific rules for differrent users', 'Implements user authentication states in an application'],
    correctAnswer: 'Performance is negatively affected, since all traffic must go through',
    explanation: 'This can serve as a bottleneck in systems, causing traffic to take more time before it gets to the destination.'
  },
  {
    id: 5, 
    question: 'Which of the following is not a step in Diffie-Hellman key exchange?',
    options: ['Both parties publicly agree and choose a secret', 'One party sets a packet header bit, so that it might get through a stateless filter', 'Each party performs modular arithmetic using the modulus, base and secret and send it to the other party', 'Each party derives a key which can be used to encrypt messages to each other'],
    correctAnswer: 'One party sets a packet header bit, so that it might get through a stateless filter',
    explanation: 'In Diffie-Hellman key exchange, both parties publicly agree on a modulus and a base and individually choose a secret. They perform modular arithmetic using the modular, base and secret and send the result to the other party. Each party then performs modular arithmetic on the received value. In this way, they each derive a key which can be used to encrypt and decrypt messages to each other.'
  },
  {
    id: 6, 
    question: 'Which of the following is not a type of firewall?',
    options: ['Application Gateway', 'Stateful filter', 'Packet Filter', 'Port-forwarding'],
    correctAnswer: 'Port-forwarding',
    explanation: 'There are three categories of firewalls: Packet filters, Stateful filters and Application gateways.'
  },
]

export type { QuizQuestion };
export { Week1Quiz, Week2Quiz, Week3Quiz, Week4Quiz, Week5Quiz };
