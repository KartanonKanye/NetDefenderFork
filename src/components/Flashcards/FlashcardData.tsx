import { FlashcardContent } from './Flashcard';

const week1_attacks: FlashcardContent[] = [
  {
    id: 1,
    title: 'Packet Sniffing',
    content:
      'Definition: the practice of gathering, collecting, and logging packets that pass through a computer network.'
  },
  {
    id: 2,
    title: 'Packet Sniffing',
    content: 'Due to security vulnerabilities, the content of packets can be inspected by malicious third-parties.'
  },
  {
    id: 3,
    title: 'Packet Sniffing - Solution',
    content: 'Encryption of packets'
  },
  {
    id: 4,
    title: 'Masquerading',
    content: 'Definition: creating a packet with arbitrary source address, packet content and destination address.'
  },
  {
    id: 5,
    title: 'Masquerading',
    content:
      'A receiver might be disguised of the true sender. Example: IP Spoofing (injecting packets with false source addresses into the internet)'
  },
  {
    id: 6,
    title: 'Masquerading - Solution',
    content: 'End-point Authentication'
  },
  {
    id: 7,
    title: 'Man in the Middle',
    content:
      'Definition: when an attacker resides in one node within the communication pat and intercepts a communication between two systems.'
  },
  {
    id: 8,
    title: 'Man in the Middle',
    content: 'MitM attacks may involve: Packet Sniffing, Injecting packets, Modifying packets or Deleting packets.'
  },
  {
    id: 9,
    title: 'Man in the Middle - Solution',
    content: 'Establish Data Integrity'
  }
];

const week1_crypto: FlashcardContent[] = [
  {
    id: 1,
    title: 'Symmetric Key Cryptography',
    content:
      'In Symmetric Key Cryptography, each letter of the plaintext is mapped to a letter of the alphabet to form ciphertext. If the mapping of plaintext letters to ciphertext letters is known, an encrypted message can be decrypted.'
  },
  {
    id: 2,
    title: 'Caesar Cipher',
    content: 'Involves the cyclic shift of letters in the alphabet by k spaces.'
  },
  {
    id: 3,
    title: 'Caesar Cipher',
    content:
      'Possible key values: 25. Vulnerability: It is possible to brute force the decryption of ciphertext, since there are only 25 possible keys.'
  },
  {
    id: 4,
    title: 'Monoalphabetic Cipher',
    content:
      'Each letter of the plaintext is fixed to a letter of the alphabet. In this case, a letter can be mapped to itself in the cipher.'
  },
  {
    id: 5,
    title: 'Monoalphabetic Cipher',
    content:
      'Possible key values: 26! . Vulnerability: Stronger than Caesar cipher. However, statistical analysis, such as frequency analysis, can be used to decipher the text'
  },
  {
    id: 6,
    title: 'Polyalphabetic Cipher',
    content: 'Involves the concatenation of different encryption schemes.'
  },
  {
    id: 7,
    title: 'Polyalphabetic Cipher',
    content:
      'Possible key values: 25m. Vulnerability: Since any number of encryption schemes can be concatenated to form this cipher, it is very secure.'
  }
];

const week2_crypto: FlashcardContent[] = [
  {
    id: 1,
    title: 'Asymmetric Cryptography',
    content:
      'Asymmetric Cryptography requires a one-way function for encryption. For example, RSA relies on modulo arithmetic.'
  },
  {
    id: 2,
    title: 'Asymmetric Cryptography - principle',
    content:
      'Finding the product of large prime numbers has a relatively low computational cost. On the other hand, it is very computationally demanding to factorize these products.'
  },
  {
    id: 3,
    title: 'Asymmetric Cryptography - security',
    content: `By using large prime numbers as keys, their product can be computed with minimal resources. This makes encryption easily accessible. However, if the prime keys are not known, finding them will require a large computational cost, which makes this method secure.`
  },
  {
    id: 4,
    title: 'Cryptographic Hash Functions',
    content:
      'Hash function takes an input, m, and computes a hash as a fixed-sized string, H(m). Example: Internet checksum, MD5, SHA-2/3.'
  }
];

const week2_packets: FlashcardContent[] = [
  {
    id: 1,
    title: 'Packet routing',
    content: 'The role of the network layer is to move packets from sender to receiver.'
  },
  {
    id: 2,
    title: 'Packet routing',
    content: 'Routers and switches maneuver packets in the network.'
  },
  {
    id: 3,
    title: 'Forwarding',
    content: "Packets are transferred from the router's input link to the appropriate output link"
  },
  {
    id: 4,
    title: 'Routing',
    content: "The network layer determines the route taken by packets, for example, using Dijkstra's algorithm."
  },
  {
    id: 5,
    title: 'Open Shorted Path First (OSPF)',
    content:
      'OSPF is an IP Routing protocol used to distribute IP routing information through an Autonomous System (AS).'
  },
  {
    id: 6,
    title: 'Open Shortest Path First (OSPF)',
    content:
      "Routers broadcast link-state information with each link state change. A topological map of the entire autonomous system (AS) is constructed by the router. Dijkstra's algorithm is used to determine a shortest-path tree to all subnets. Individual link costs are then set by admin."
  }
];

const week2_message_integrity: FlashcardContent[] = [
  {
    id: 1,
    title: 'Message Integrity',
    content: 'In OSPF, each router broadcasts a link-state message to all other routers whenever link states change.'
  },
  {
    id: 2,
    title: 'Message Integrity: Problem',
    content: 'Bogus link-state messages can be distributed, containing incorrect link-state information.'
  },
  {
    id: 3,
    title: 'Message Integrity: Solution',
    content:
      'A secret key is used to hash the message, resulting in a digest known as the Message Authentication Code (MAC).'
  },
  {
    id: 4,
    title: 'Message Authentication Codes (MAC)',
    content:
      'The secret key is known by both sender and receiver. The receiver can decrypt the received message and check if the hashes match. If they do, it means the right secrey key was used and the message was not altered in transit'
  },
  {
    id: 5,
    title: 'Message Authentication Codes (MAC)',
    content:
      'MACs can be used to detect if messages have been tampered with. The most prevalen form is Hash-based Message Authentication Codes (HMAC).'
  },
  {
    id: 6,
    title: 'Message Authentication Codes: Vulnerability',
    content: 'Anyone with the secret key can send the correct MAC. There is no way to authenticate the sender.'
  }
];

const week3_digital_signatures: FlashcardContent[] = [
  {
    id: 1,
    title: 'Digital Signatures',
    content: 'cryptographic technique to prove the identity of the creator of a document.'
  },
  {
    id: 2,
    title: 'Features of Digital Signatures',
    content: 'must be unique, verifiable and non-forgeable.'
  },
  {
    id: 3,
    title: 'Digital Signatures - method',
    content: 'A message is encrypted with sender\'s private key. Receiver can decrypt it with sender\'s known public key, verifying that the message came from sender.'
  },
  {
    id: 4,
    title: 'Digital Signatures',
    content: 'Message Authentication Codes (MACs) cannot be used as digital signatures, since the receiver would need a copy of the MAC to verify it. This means it would not be unique.'
  },
];

const week3_end_point_auth: FlashcardContent[] = [
  {
    id: 1,
    title: 'End-point Authentication',
    content: 'Authentication is difficult in networks, since the other party is "invisible".'
  },
  {
    id: 2,
    title: 'End-point Authentication - vulnerabilities',
    content: 'Man-in-the-middle or replay attacks are possible.'
  },
  {
    id: 3,
    title: 'End-point Authentication - solution',
    content: 'The solution to this is Certified Authorities (CAs).' },
  {
    id: 4,
    title: 'Certified Authority (CA)',
    content: 'Certified Authority (CA) is a trusted third-party that generates a certificate to verify the sender\'s public key.' 
  },
  {
    id: 5,
    title: 'Certified Authority - method',
    content: 'Receiver can use a CA-issued certificate, along with the sender\'s public key to authenticate the sender of a message.'
  }
]

const week4_email: FlashcardContent[] = [
  {
    id: 1,
    title: 'Securing Email',
    content: 'Securing email focuses on the top three OSI layers (Application, Presentation and Session) or the top layer in TCP/IP stack (Application).'
  },
  {
    id: 2,
    title: 'Desired Properties of Secure Email',
    content: 'Confidentiality, Sender Authentication, Message Integrity, Receiver Authentication'
  },
  {
    id: 3,
    title: 'PGP',
    content: 'Pretty Good Privacy (PGP) is an encryption method using for signing, encrypting, and decrypting data. It is commonly used to sign and encrypt email communication.' },
  {
    id: 4,
    title: 'PGP - Web of Trust',
    content: 'PGP implements the Web of Trust model, where a party can have trusted contacts. They accumulate the public keys of other parties that they trust, and can verify the identities of their trusted contacts.' 
  },
  {
    id: 5,
    title: 'PGP - Chains of Trust',
    content: 'Parties can see the trusted contacts of their trusted contacts. This allows for chains of trust. In this way, there can be different levels of trust in unknown parties, depending on whether they are trusted by your contacts.'
  },
  {
    id: 6,
    title: 'PGP - Benefits',
    content: 'PGP is decentralized, allows for digital signatures and end-to-end encryption and decryption of communications, such as emails.'
  }
]

const week4_tcp: FlashcardContent[] = [
  {
    id: 1,
    title: 'TCP',
    content: 'Transmission Control Protocol is a communications standard that allows for exchanging connections over a network. It involves the Transport layer of the OSI model or TCP/IP stack.'
  },
  {
    id: 2,
    title: 'Desired Properties of Secure TCP',
    content: 'Confidentiality, Data Integrity, End-Point Authentication'
  },
  {
    id: 3,
    title: 'SSL / TLS',
    content: 'Secure Sockets Layer is a security protocol which implements the desired properties of Secure TCP connections. Transport Layer Security is a modified version of SSL v3, standardized by the Internet Engineering Task Force (IETF).' },
  {
    id: 4,
    title: 'SSL Handshake',
    content: 'In SSL, a handshake occurs when two parties attempt to connect. First, a TCP connection is established. Then, the identity of the communication partner is verified. Finally, a master key is generated.' 
  },
  {
    id: 5,
    title: 'How SSL works',
    content: 'SSL breaks the data stream into slices. Message Authentication Codes are created for integrity. The data slices are encrypted, along with the MAC, using the Master Key. This is then passed over TCP to the communication partner.'
  },
  {
    id: 6,
    title: 'Security Features of SSL',
    content: 'Nonces are used to prevent connection replay attacks. Message Authentication Codes of all handshake messages are calculated to protect the handshake from being tampered with. "SSL connection close" is used, in addition to "TCP FIN" messages to prevent truncation attacks - where an attacker can close a connection before it is actually finished.' 
  },
]

const week5_ipsec: FlashcardContent[] = [
  {
    id: 1,
    title: 'IPsec',
    content: 'IP security (IPsec) takes place in the Network layer of the OSI model or Internet layer of the TCP/IP stack',
  },
  {
    id: 2,
    title: 'Desired Properties of IPsec',
    content: 'Confidentiality, Authentication, Data Integrity, Replay-attack prevention',
  },
  {
    id: 3,
    title: 'Private Networks',
    content: 'Private Networks (PNs) are standalone physical networks including routers, links and DNS infrastructure. They are separated from the internet, which can lead to high maintenance costs.',
  },
  {
    id: 4,
    title: 'Virtual Private Networks (VPNs)',
    content: 'Virtual Private Networks are similar to PNs, except their traffic gets sent over the public internet, instead of a physical network. In IPsec, the secure payloads are encapsulated with an IPsec header, instead of a standard IP packet.',
  },
  {
    id: 5,
    title: 'Security Associations',
    content: 'Senders and receivers create network layer directional logical connections, known as a Security Associations (SAs). The state of the SA is maintained at origin and destination for session management.',
  },
  {
    id: 6,
    title: 'Constructing an IPsec datagram',
    content: 'First, an ESP trailer is attached to an original IPv4 datagram. Then, this is encrypted using the algorithm and key specified by the SA. The ESP header is attached to th e payload and a MAC for the whole payload is created. Finally, a new IPsec header is created.',
  },
  {
    id: 7,
    title: 'Key Management in IPsec',
    content: 'IPsec uses Internet Key Exchange (IKE). Each entity had certificate and public key. First, a master key is established through bi-directional IKE SA via Diffie-Hellman. Then, messages are signed, so they can be authenticated. The SA keys are computed from the master secret. Finally, encryption and authentication algorithms can be negotiated.',
  },
  {
    id: 8,
    title: 'Diffie-Hellman Key Exchange - Steps',
    content: 'Both parties publicly agree on a modulus and a base and individually choose a secret. They perform modular arithmetic using the modular, base and secret and send the result to the other party. Each party then performs modular arithmetic on the received value. In this way, they each derive a key which can be used to encrypt and decrypt messages to each other.',
  }
]

const week5_firewalls: FlashcardContent[] = [
  {
    id: 1,
    title: 'Firewalls',
    content: 'Firewalls isolate local networks from the internet. Only authorized traffic passes through the firewall; non-authorized traffic is dropped. A firewall should be immune to penetration.',
  },
  {
    id: 2,
    title: 'Categories of Firewalls',
    content: 'There are three categories of firewalls: Packet filters, Stateful filters and Application gateways.',
  },
  {
    id: 3,
    title: 'Packet Filters',
    content: 'In packet filters, a gateway router examines each datagram in isolation. There can be administrator-defined rules for passing or dropping of traffic. Filtering decisions can be based on IP source/destination, protocol type, source/destination port, or ICMP message type, among others.',
  },
  {
    id: 4,
    title: 'Stateful Filters',
    content: 'Stateful filters track all ongoing TCP traffic in a connection table. These aim to solve some of the vulnerabilities of stateless filters. For example, in stateless filters, packets with malformatted packets may get through filter and can be used to crash local systems.',
  },
  {
    id: 5,
    title: 'Application Gateways',
    content: 'Application Gateways allow application specific rules for selected users. They can make policy decisions based on application data or take data based on IP/TCP/UDP headers. It is essentially an application-specific server, which all data must pass through and where user authorization is performed.',
  },
  {
    id: 6,
    title: 'Application Gateways - Downside',
    content: 'Since all traffic must pass through the application gateway, there is a performance penalty in the system. This could serve as a bottleneck, causing traffic to take longer to get from source and destination.',
  },
  {
    id: 7,
    title: 'Intrusion Detection Systems (IDS)',
    content: 'Intrusion Detection Systems monitor network traffic for suspicious or known malicious activity. For many attack types, deep packet inspection is needed. This may involve looking beyond header fields and into actual application data carried by packets.',
  },
  {
    id: 8,
    title: 'Intrusion Detection Systems (IDS)',
    content: 'IDSs detect a wide range of attacks including network mapping, port scans, TCP stack scans, DoS bandwidth flooding attacks, worms, virused and OS/application vulnerabily attacks. IDS systems are either signature-based or anomaly-based.',
  },
]

export { week1_attacks, week1_crypto, week2_crypto, week2_packets, week2_message_integrity, week3_digital_signatures, week3_end_point_auth, week4_email, week4_tcp, week5_ipsec, week5_firewalls };
