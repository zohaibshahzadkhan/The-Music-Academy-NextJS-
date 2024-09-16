"use client"
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image?: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="mt-0 md:mt-10 bg-black-900 pb-10">
      <div>
        <div className="text-center">
          <h2 className="py-6 text-3xl md:text-5xl text-white-400 font-semibold tracking-wide">
            Featured Courses
          </h2>
        </div>
      </div>
      <div className="mt-10 mx-auto w-[70%] text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient  className="flex flex-col rounded-[22px] dark:bg-gray-950 overflow-hidden h-full max-w-sm ">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link className="pt-2" href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
        >
             <Button
              borderRadius="1.75rem"
              showMovingBorder={false}
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <h1>View All Courses</h1>
            </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
