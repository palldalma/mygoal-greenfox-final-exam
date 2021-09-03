import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { UserInfo } from "../../../interfaces/logininfo";
import { listCourses } from "../../../services/translation-service";
import {
  CourseContainer,
  TranslationTopic,
} from "../../../styles/translation.styles";

export interface StarterTranslationCourseSelectorProps {}

const StarterTranslationCourseSelector: FC<StarterTranslationCourseSelectorProps> =
  () => {
    const state = useSelector((state) => state);
    const token = useSelector((state: UserInfo) => state.user.token);
    const id = useSelector((state: UserInfo) => state.user.id);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [courses, setCourses] = useState([{ id: 0, name: "" }]);

    // const courses = {
    //   courses: [
    //     { id: 1, name: "course1" },
    //     { id: 2, name: "course2" },
    //     { id: 3, name: "course3" },
    //   ],
    // };

    useEffect(() => {
      const checkStorage = (): void => {
        if (token) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      };
      checkStorage();

      async function getMyCourses() {
        await listCourses(id).then((data) => {
          if (data.courses) {
            setCourses(data.courses);
          }
        });
      }

      getMyCourses();
    }, [state]);

    return (
      <>
        {isLoggedIn ? (
          <CourseContainer>
            {courses.map((course) => {
              return (
                <TranslationTopic
                  to={`/starter/translation/:${course.id}`}
                  key={course.id}
                >
                  {course.name}
                </TranslationTopic>
              );
            })}
          </CourseContainer>
        ) : (
          <CourseContainer>
            <h1>You should login, buddy.</h1>
          </CourseContainer>
        )}
      </>
    );
  };

export default StarterTranslationCourseSelector;
