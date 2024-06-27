require('dotenv').config();
import { airdropIfRequired } from "@solana-developers/helpers";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
var bs58 = require('bs58');

const connection = new Connection(clusterApiUrl("devnet"));

console.log("Connected to devnet");

const publicKey = new PublicKey("PK");

await airdropIfRequired(connection, publicKey, LAMPORTS_PER_SOL, 0.5 * LAMPORTS_PER_SOL);

const balance = await connection.getBalance(publicKey);
console.log("Balance: ", balance / LAMPORTS_PER_SOL, "SOL");

const newKey = bs58.encode(publicKey.toBuffer());
console.log("new key: ", newKey);