import dns from "dns";
import mongoose from "mongoose";
import seedSuperAdmin from "../SuperAdmin.js";

// Windows/ISP DNS often refuses SRV lookups used by mongodb+srv:// URIs
dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
        await seedSuperAdmin();
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDb;