import Navbar from "../../components/Header/Desktop";
import User from "../../assets/user.svg";
import NavSide from "../../components/Header/Side";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCourseCategory,
  getCourseInstructor,
  getCourseType,
  getPopularFree,
  getPopularPremium,
  getTopCourse,
  getTotalCourse,
  getTotalInstructor,
  getTotalOrder,
  getTotalUser,
  getUserActive,
} from "../../redux/Actions/DataActions";
import { Bar, Doughnut, Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    userActive,
    totalCourse,
    totalOrder,
    totalUser,
    topCourse,
    courseType,
    courseCategory,
    courseInstructor,
    totalInstructor,
    popularPremium,
    popularFree,
  } = useSelector((state) => state.data);

  // Check if topCourse is available
  const isTopCourseAvailable = popularPremium && popularPremium.length > 0;
  const isTopCourseFreeAvailable = popularFree && popularFree.length > 0;

  const isCourseTypeAvailable = courseType && courseType.length > 0;
  const isCourseCategoryAvailable = courseCategory && courseCategory.length > 0;
  const isCourseInstructorAvailable =
    courseInstructor && courseInstructor.length > 0;

  const allPopularCourses = isTopCourseAvailable
    ? [...popularPremium, ...popularFree]
    : [];

  const courseData = {
    labels: isTopCourseAvailable
      ? popularPremium.map((data) => data.title.toString())
      : [],

    datasets: [
      {
        label: "Premium",
        data: isTopCourseAvailable
          ? popularPremium.map((data) => data.taken)
          : [],
        backgroundColor: [" #FFBE05"],
      },
    ],
  };

  const courseDataInstructor = {
    labels: isCourseInstructorAvailable
      ? courseInstructor.map((data) => data.instructorName.toString())
      : [],
    datasets: [
      {
        label: "Kelas Yang Diambil",
        data: isCourseInstructorAvailable
          ? courseInstructor.map((data) => data.totalCourses)
          : [],
        backgroundColor: ["#6148FF"],
      },
    ],
  };

  const dataCourseType = {
    labels: isCourseTypeAvailable
      ? courseType.map((data) => data.typeName.toString())
      : [],
    datasets: [
      {
        label: "Banyak Kelas",
        data: isCourseTypeAvailable
          ? courseType.map((data) => data.totalCourse)
          : [],
        backgroundColor: ["#00CF6C", "#FF0000"],
      },
    ],
  };

  const dataCourseCategory = {
    labels: isCourseCategoryAvailable
      ? courseCategory.map((data) => data.categoryName.toString())
      : [],
    datasets: [
      {
        label: "Banyak Kelas",
        data: isCourseCategoryAvailable
          ? courseCategory.map((data) => data.totalCourse)
          : [],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  useEffect(() => {
    dispatch(getTotalCourse());
    dispatch(getTotalOrder());
    dispatch(getTopCourse());
    dispatch(getUserActive());
    dispatch(getTotalUser());
    dispatch(getCourseType());
    dispatch(getCourseCategory());
    dispatch(getCourseInstructor());
    dispatch(getTotalInstructor());
    dispatch(getPopularPremium());
    dispatch(getPopularFree());
  }, [dispatch]);

  const Data = [
    {
      id: 1,
      total: userActive?.value,
      Keterangan: "Active User",
    },
    {
      id: 2,
      total: totalCourse?.value,
      Keterangan: "Total Course",
    },
    {
      id: 3,
      total: totalOrder?.value,
      Keterangan: "Total Payment",
    },
    {
      id: 4,
      total: totalUser?.value,
      Keterangan: "Total User",
    },
    {
      id: 5,
      total: totalInstructor?.value,
      Keterangan: "Total Instrunctor",
    },
  ];

  return (
    <div className="flex  ">
      <NavSide />
      <div className="w-[100%] lg:w-[85%]   ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center container mt-10 mx-auto w-full mb-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-between mb-14  gap-5">
            {Data.map((items) => (
              <div key={items.id} className="w-full">
                <div
                  className={`flex flex-row p-6  gap-6  rounded-2xl    ${
                    items.Keterangan === "Active User"
                      ? "bg-YELLOW05  w-full"
                      : items.Keterangan === "Total User"
                      ? "bg-green-500  w-full"
                      : items.Keterangan === "Total Payment"
                      ? "bg-DARKBLUE03 w-full"
                      : items.Keterangan === "Total Course"
                      ? "bg-DARKBLUE05 w-full"
                      : items.Keterangan === "Total Instrunctor"
                      ? "bg-[#FF5733]"
                      : ""
                  }`}
                >
                  <div className="bg-white flex items-center px-2 rounded-2xl ">
                    <img src={User} />
                  </div>
                  <div className="font-Montserrat text-white ">
                    <div className="font-normal text-2xl">{items.total}</div>
                    <div className="font-bold text-2xl">{items.Keterangan}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full h-full flex flex-col justify-center gap-4">
              <div className="text-center font-Montserrat font-bold text-DARKBLUE05 lg:text-2xl">
                Grafik Data Banyak kelas Yang Diambil
              </div>
              <Bar data={courseData} />
            </div>

            <div className=" flex flex-col justify-center gap-4 mt-10">
              <div className="text-center font-Montserrat font-bold text-DARKBLUE05 lg:text-2xl">
                Grafik Data Banyak kelas Bersadarkan Instructor
              </div>
              <Bar data={courseDataInstructor} />
            </div>

            <div className="w-full h-full flex flex-col justify-center gap-4">
              <div className="text-center font-Montserrat font-bold text-DARKBLUE05 lg:text-2xl">
                Grafik Data Banyak kelas Per Kategory
              </div>
              <Radar data={dataCourseCategory} />
            </div>

            <div className=" flex flex-col justify-center gap-4 mt-10">
              <div className="text-center font-Montserrat font-bold text-DARKBLUE05 lg:text-2xl">
                Grafik Data Banyak kelas Bersadarkan Type
              </div>
              <Doughnut data={dataCourseType} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
