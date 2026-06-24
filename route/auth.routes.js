import express from "express";

const router = express.Router();

import {
  login,
  register,
  enquireData,
  getEnquireData,
  contactData,
  getContactData,
  createCareer,
  getUserData,
  getCareerData,
  brochureData,
  getBrochureData,
  getMe,
  refreshAccessToken,
  logout,
  getPendingUsers,
  getAllUsers,
  approveUser,
  rejectUser,
  updateUserRole,
} from "../controller/auth.controller.js";
import { uploadResume } from "../middleware/multer.js";
import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

router.post("/register", register);

router.post("/login", login);

router.get("/auth/me", protect, getMe);

router.post("/refresh-token", refreshAccessToken);

router.post("/logout", logout);

router.get(
  "/admin/pending-users",
  protect,
  authorize("superadmin"),
  getPendingUsers
);

router.get("/admin/users", protect, authorize("superadmin"), getAllUsers);

router.patch(
  "/admin/users/:id/approve",
  protect,
  authorize("superadmin"),
  approveUser
);

router.patch(
  "/admin/users/:id/reject",
  protect,
  authorize("superadmin"),
  rejectUser
);

router.patch(
  "/admin/users/:id/role",
  protect,
  authorize("superadmin"),
  updateUserRole
);

router.get("/get-user-data", getUserData);

router.post("/enquire-data", enquireData);

router.get("/get-enquire-data", getEnquireData);

router.post("/contact-data", contactData);

router.get("/get-contact-data", getContactData);

router.post("/career", uploadResume.single("resume"), createCareer);

router.get("/get-career-data", getCareerData);

router.post("/brochure-data", brochureData);

router.get("/get-brochure-data", getBrochureData);

export default router;
