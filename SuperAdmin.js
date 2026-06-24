import User from "./model/User.js";
import argon2 from "argon2";

const seedSuperAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({
      email: "varunmathur817@gmail.com",
    });

    if (existingAdmin) {
      if (existingAdmin.status !== "approved") {
        existingAdmin.status = "approved";
        await existingAdmin.save();
      }
      console.log("Super Admin Already Exists");
      return;
    }

    const hashedPassword = await argon2.hash(
      "varun@123"
    );

    await User.create({
      name: "Varun Mathur",
      email: "varunmathur817@gmail.com",
      password: hashedPassword,
      role: "superadmin",
      status: "approved",
    });

    console.log("Super Admin Created");
  } catch (error) {
    console.log(error.message);
  }
};

export default seedSuperAdmin;