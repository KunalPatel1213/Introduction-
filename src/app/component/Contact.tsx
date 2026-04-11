"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

type ContactValues = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const contactSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Please enter your full name")
    .required("Full name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  subject: Yup.string().min(3, "Subject is too short").required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const Contact = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showStartupNotice = searchParams.get("project") === "startup";
  const showCloneWorkNotice = searchParams.get("project") === "clone-work";
  const showGitHubCodeNotice = searchParams.get("code") === "github";

  const formik = useFormik<ContactValues>({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      console.log("Contact form submitted", values);
      router.push("/contact/thank-you");
    },
  });

  return (
    <section
      id="contact"
      className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-[#fafafa] px-4 py-5 text-black sm:px-6 sm:py-6 lg:px-8 mt-15"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.03),transparent_28%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex h-full w-full max-w-5xl items-center justify-center"
      >
        <div className="w-full overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="grid h-full md:grid-cols-[1fr_1.08fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex flex-col justify-between bg-[#16162a] p-5 text-white sm:p-6 lg:p-8"
            >
              <div>
                <div className="relative mx-auto flex h-44 w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl bg-[#17172d] sm:h-52">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(114,159,255,0.22),transparent_30%)]" />
                  <div className="absolute left-6 top-6 h-4 w-4 rounded-full bg-[#ff6b6b]" />
                  <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full bg-white/15 blur-2xl" />
                  <div className="absolute right-10 top-12 h-16 w-16 rounded-full bg-white/10 blur-2xl" />

                  <div className="relative w-[86%] max-w-sm rounded-2xl border border-white/10 bg-[#1f1f39] p-3 shadow-2xl shadow-black/30">
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="h-16 rounded-xl bg-white/90" />
                      <div className="col-span-2 h-16 rounded-xl bg-[#f7c56b]" />
                      <div className="h-16 rounded-xl bg-[#f3a55b]" />
                      <div className="col-span-2 h-16 rounded-xl bg-[#ff6d5f]" />
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-sm font-semibold tracking-[0.3em] text-white/80">
                        CONTACT US
                      </span>
                      <FaPaperPlane className="text-lg text-white/80" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-center">
                  <h3 className="text-lg font-bold sm:text-2xl">
                    Let&apos;s collaborate and create something that genuinely helps people.
                  </h3>
                  <p className="mx-auto max-w-md text-sm leading-7 text-white/75 sm:text-base">
                    If you have an idea, project, or partnership in mind, send it over. I&apos;ll help
                    turn it into something clean, useful, and visually strong.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href="https://github.com/KunalPatel1213"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm text-white transition hover:bg-white hover:text-[#16162a]"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/innocent_kunal__90/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm text-white transition hover:bg-white hover:text-[#16162a]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/kunal-patel-b1bb0431a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQctiwNU%2BRfKfnrp5MOya9A%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm text-white transition hover:bg-white hover:text-[#16162a]"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="p-5 sm:p-6 lg:p-8"
            >
              <div className="mx-auto max-w-2xl">
                <div className="mb-4 text-center md:text-left">
                  {showGitHubCodeNotice && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4"
                    >
                      <h4 className="mb-3 text-sm font-bold text-blue-900">Source Code</h4>
                      <p className="mb-4 text-xs leading-5 text-blue-800">
                        The source code for these clone projects is available. Use the contact form below to get the details.
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => router.push("/#project")}
                          className="rounded-md border border-blue-300 bg-white px-3 py-1.5 text-xs font-semibold text-blue-900 transition hover:bg-blue-100"
                        >
                          Back to Projects
                        </button>
                        <button
                          className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700"
                        >
                          Submit Request
                        </button>
                      </div>
                    </motion.div>
                  )}
                  {showStartupNotice || showCloneWorkNotice ? (
                    <div className="mb-4 rounded-lg border border-black/10 bg-[#f7f7f7] px-4 py-3 text-xs leading-6 text-gray-700">
                      {showStartupNotice
                        ? "This startup project is in pre-launch mode and will be visible after launch. For more details, "
                        : "These clone projects are part of my portfolio. For more details, "}
                      <a
                        href="/contact#contact"
                        className="cursor-pointer font-semibold text-blue-600 underline decoration-blue-500 underline-offset-4 transition hover:text-blue-700"
                      >
                        contact us
                      </a>
                      .
                    </div>
                  ) : null}
                  <h3 className="text-2xl font-bold text-black sm:text-3xl">Send us a Message</h3>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base">
                    Fill out the form below, and we&apos;ll get back to you soon.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-[10px] border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black"
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <p className="-mt-2 text-xs text-black">{formik.errors.fullName}</p>
                  ) : null}

                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-[10px] border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="-mt-2 text-xs text-black">{formik.errors.email}</p>
                  ) : null}

                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-[10px] border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black"
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <p className="-mt-2 text-xs text-black">{formik.errors.subject}</p>
                  ) : null}

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-[10px] border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black"
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <p className="-mt-2 text-xs text-black">{formik.errors.message}</p>
                  ) : null}

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#0b63f6] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#084ec2]"
                  >
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </button>

                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
