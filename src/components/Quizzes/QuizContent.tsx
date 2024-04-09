interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// explanation part needs to be changed
const Week1Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which type of attack renders a website unusable for legitimate users?',
    options: ['Denial of Service', 'Worm', 'Packet sniffing'],
    correctAnswer: 'Denial of Service',
    explanation:
      'When a DoS attack occurs, it can be stopped by identifying the host sending the traffic and terminating their connection to the server.\n\nWhen multiple sources generate traffic, it is classified as a Distributed Denial of Service (DDoS) attack.\n\nDDoS attacks are especially challenging to detect and defend against, as there can be many hosts.\n\nSome ways to prevent DoS attacks are by monitoring and analysing network traffic, and implementing a firewall and intrusion detection system.'
  },
  {
    id: 2,
    question: 'Which type of attack involves injecting packets with false source addresses?',
    options: ['Trojan Horse', 'Man-in-the-middle', 'Masquerading'],
    correctAnswer: 'Masquerading',
    explanation:
      'Packets with fake source addresses, can be sent to receivers. This makes it difficult to determine who the sender is or where the attack came from.\n\nThis type of attack can be prevented by using End-point authentication. End-point authentication allows receivers to ensure they are receiving packets from a legitimate source.\n\nYou will learn more about end-point authentication in later missions. '
  },
  {
    id: 3,
    question:
      'Which type of attack involves a malicious third party detecting, reading and recording the data sent over a network?',
    options: ['Botnet', 'Ransomware', 'Packet sniffing'],
    correctAnswer: 'Packet sniffing',
    explanation:
      'Security vulnerabilities exist when data is sent over a network to wirelessly-connected devices.\n\nMalicious third parties can access the traffic across a network and analyze packets sent, packet content, private/sensitive information, connection habits, social ties and patterns.\n\nIn order to prevent this, online traffic should be encrypted. This can be done using a VPN, SSL, PGP and other methods that will be discussed in future missions.'
  },
  {
    id: 4,
    question: 'What measure could prevent against Packet Sniffing?',
    options: [
      'Sending well-crafted messages to operating systems',
      'Trojan Horse',
      'Encryption of packets',
      'Sending vast amounts of packets'
    ],
    correctAnswer: 'Encryption of packets',
    explanation:
      'If encrypted packets are intercepted, it is not easy to understand the information contained in them. This allows information to be kept safe from malicious third-parties.'
  },
  {
    id: 5,
    question: 'What measure could prevent against Masquerading?',
    options: ['IP Spoofing', 'End-point Authentication', 'Injecting packets', 'DDoS Attacks'],
    correctAnswer: 'End-point Authentication',
    explanation:
      'If encrypted packets are intercepted, it is not easy to understand the information contained in them. This allows information to be kept safe from malicious third-parties.'
  }
];

const Week2Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: 'Alice is building a website and wants to encrypt the passwords of users. Is SHA-1 a suitable hash function for this purpose?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
    explanation:
      'SHA-1 is not as safe as other hash functions, such as SHA-2 and SHA-3. The main security concern with SHA-1 is that collisions have been produced. This can impact the security of the website, as a collision could be produced for a user and their account could be accessed. Even though a collision for SHA-1 requires a lot of resources to be produced, it is better to opt for one of the more secure hash functions available.'
  },
  {
    id: 2,
    question: 'Asymmetric cryptography is built upon the principle that:',
    options: ['products of prime numbers can be easily factorized', 
      'prime numbers cannot be factorized', 
      'it is computationally cheap to find product of prime numbers, but computationally costly to factorize the product', 
      'the product of large prime numbers cannot easily be stored in memory'],
    correctAnswer: 'it is computationally cheap to find product of prime numbers, but computationally costly to factorize the product',
    explanation:
      'Hash functions utilise the fact that the generation and arithmetic operations of large prime numbers is relatively easy for modern computers. Therefore, two large prime number will serve as the public and private keys when encrypting some plaintext. The public key is known to anyone, but the private key is known only to the intended recipient.In this way, it will require a large amount of resources for an attacker to find the associated private key of ciphertext, while the intended recipient can decrypt it easily.'
  },
  {
    id: 3,
    question:
      'Which of the following algorithms are used in the network layer to route packets?',
    options: ['Kruskal\'s Algorithm', 'Prim\'s Algorithm', 'Dijkstra\'s Algorithm', 'Newton\'s Algorithm'],
    correctAnswer: 'Dijkstra\'s Algorithm',
    explanation:
      'The role of the network layer is to move packets from sender to receiver. Dijkstra\'s Algorithm is used to determine a shortest-path tree of all subnets in order to route packets in the network.'
  },
  {
    id: 4,
    question: 'What method is implemented as a solution to the Message Integrity problem?',
    options: ['Internet Checksum', 'RSA cryptography', 'Message Authentication Codes (MAC)', 'Open shortest-path first (OSPF)'],
    correctAnswer: 'Message Authentication Codes (MAC)',
    explanation:
      'A secret key is used to hash each message, resulting in a digest known as the MAC. Only the sender and receiver are supposed to know this secret key. When the receiver obtains the message, along with the MAC, they use the secrey key to hash the message. If the hash matches the MAC, it means the message has not been tampered with.'
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

export type { QuizQuestion };
export { Week1Quiz, Week2Quiz, Week3Quiz, Week4Quiz };
