import React from "react";
import Card from "../Components/Card";
import GreenButton from "../Components/GreenButton";
import { CheckCircle2, Brain } from "lucide-react";
import MiniCard from "../Components/MiniCard";

{
  /* <div className="flex flex-col p-5 font-[Poppins]">
        <span className="text-start text-sm text-green-800">
          CHILDREN ACTIVITIES
        </span>

        <MiniCard
          icon={<Brain />}
          Stitle={"Cognitive Development"}
          descri={
            "Learning through play strengthens problem-solving skills, memory, and the ability to think creatively and critically."
          }
        />
      </div> */
}
const HomePage = () => {
  return (
    <div className="flex h-full w-full flex-col gap-y-5">
      {/* Banner */}
      <div className="flex bg-linear-to-b from-swamp-green to-egg-dark text-bone">
        <div className="flex flex-col gap-y-5 p-5">
          <h2 className="text-sm">Admission Now Open</h2>
          <h1 className="font-[PoppinsBold] text-xl">
            Discover a joyful preschool journey with faith, play, and learning
          </h1>
          <h3 className="text-xs">
            "For it is by grace you have been saved, through faith—and this is
            not from yourselves, it is the gift of God—not by works, so that no
            one can boast". Ephesians 2:8-9(NIV)
          </h3>
          <span className="flex items-center justify-between text-xs">
            <h3>School Year 2026 - 2027</h3>
            <GreenButton Label={"Enroll Now"} />
          </span>
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          <span className="px-5 font-[PoppinsBold] text-swamp-green">
            Academic Programs
          </span>
          <div className="flex overflow-hidden">
            <div className="no-scrollbar flex gap-x-5 overflow-x-auto px-5 py-5">
              <Card
                Cimg={"/assets/nursery.jpg"}
                Ctitle={"Nursery"}
                Cage={"3 Years old"}
                Cdesc={
                  "Our preschool works closely with parents to ensure the maximum benefit from early schooling."
                }
              />
              <Card
                Cimg={"/assets/nursery.jpg"}
                Ctitle={"Pre-Kinder"}
                Cage={"4-5 Years old"}
                Cdesc={
                  "Provides students with life skills, knowledge, and Christian values."
                }
              />
              <Card
                Cimg={"/assets/nursery.jpg"}
                Ctitle={"Kinder"}
                Cage={"5-6 Years old"}
                Cdesc={
                  "Let's integrate that beautiful guiding principle into the assessment material so parents know right away what your school stands for."
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* mission vision */}
      <div>
        <div className="flex flex-col gap-y-2 p-5">
          <h3 className="text-base text-swamp-green">Mission</h3>
          <h1 className="font-[PoppinsBold] text-lg text-egg-dark">
            Raising Godly and Lifelong Learners
          </h1>
          <span className="text-justify text-xs text-ashlight">
            To be a Christ-centered preschool that inspires young children to
            grow in faith, character, knowledge, and confidence. We envision a
            generation of lifelong learners who love God, respect others, and
            are equipped with the skills and values needed to succeed in school
            and in life.
          </span>
        </div>
        <div className="flex flex-col gap-y-2 p-5">
          <span className="text-base text-swamp-green">Vision</span>
          <span className="font-[PoppinsBold] text-lg text-egg-dark">
            Teach with Love, Faith, and Excellence
          </span>
          <span className="text-justify text-xs text-ashlight">
            To be a Christ-centered preschool that inspires young children to
            grow in faith, character, knowledge, and confidence. We envision a
            generation of lifelong learners who love God, respect others, and
            are equipped with the skills and values needed to succeed in school
            and in life.
          </span>
        </div>
      </div>

      {/* Video + why parents choose us */}
      <div className="flex flex-col gap-y-5 p-5">
        <div className="flex max-w-3xl flex-col gap-y-3">
          <span className="flex flex-col">
            <h1 className="font-[PoppinsBold] text-lg text-egg-dark">
              Grace Christian Academy
            </h1>
            <h3 className="text-xs text-ashlight">
              Short video story from campus
            </h3>
          </span>

          <video className="h-50 w-full rounded-2xl" controls>
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <div className="flex h-auto flex-col gap-y-5 rounded-2xl bg-bone p-5 inset-shadow-med">
            <h1 className="text-sm">WHY PARENTS CHOOSE US</h1>
            <div className="flex flex-col gap-y-4 text-xs">
              <span className="flex items-center gap-x-3">
                <span>
                  <CheckCircle2 />
                </span>
                A safe, joyful, and structured experience
              </span>
              <span className="flex items-center gap-x-3">
                <span>
                  <CheckCircle2 />
                </span>
                Safe, supportive, and child-centered education
              </span>
              <span className="flex items-center gap-x-3">
                <span>
                  <CheckCircle2 />
                </span>
                Engaging activities that make learning meaningful and fun
              </span>
              <span className="flex items-center gap-x-3">
                <span>
                  <CheckCircle2 />
                </span>
                We help every child grow with confidence and values
              </span>
              <span className="flex items-center gap-x-3">
                <span>
                  <CheckCircle2 />
                </span>
                Focused on both education and character formation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* children activities */}
      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          <span className="px-5 font-[PoppinsBold] text-swamp-green">
            Children Activities
          </span>
          <div className="flex overflow-hidden">
            <div className="no-scrollbar flex snap-x snap-mandatory gap-x-5 overflow-x-auto px-5 py-5">
              <MiniCard
                descri={
                  "Learning through play strengthens problem-solving skills, memory, and the ability to think creatively and critically."
                }
                icon={"🧠"}
                Stitle={"Cognitive Development"}
              />
              <MiniCard
                descri={
                  "Active play and movement activities build strong muscles, coordination, and establish healthy habits for life."
                }
                icon={"💪"}
                Stitle={"Cognitive Development"}
              />
              <MiniCard
                descri={
                  "Safe spaces for self-expression and supportive relationships help children develop confidence and emotional resilience"
                }
                icon={"❤️"}
                Stitle={"Emotional Well being"}
              />
              <MiniCard
                descri={
                  "Group activities teach sharing, cooperation, turn-taking, and empathy essential skills for healthy relationships."
                }
                icon={"🤗"}
                Stitle={"Social Skills"}
              />
              <MiniCard
                descri={
                  "Faith-based activities and Christian values help children develop a strong moral foundation rooted in love and kindness."
                }
                icon={"✝️"}
                Stitle={"Spiritual Growth"}
              />
              <MiniCard
                descri={
                  "Arts, dramatic play, and open-ended exploration encourage self-expression and divergent thinking."
                }
                icon={"✨"}
                Stitle={"Creativity & Imagination"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
