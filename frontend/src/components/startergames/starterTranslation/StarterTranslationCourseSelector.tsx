import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { UserInfo } from "../../../interfaces/logininfo";
import { listCourses } from "../../../services/translation-service";
import {
  CourseContainer,
  TranslationTopic,
} from "../../../styles/translation.styles";

export interface StarterTranslationCourseSelectorProps {
  updateCourseid: Function;
}

const StarterTranslationCourseSelector: FC<StarterTranslationCourseSelectorProps> =
  ({ updateCourseid }) => {
    const token = useSelector((state: UserInfo) => state.user.token);
    const id = useSelector((state: UserInfo) => state.user.id);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [courses, setCourses] = useState([{ id: 0, name: "" }]);

    useEffect(() => {
      const checkStore = (): void => {
        if (token) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      };
      checkStore();

      async function getMyCourses() {
        await listCourses(id, token).then((data) => {
          if (data.courses) {
            setCourses(data.courses);
          }
        });
      }

      getMyCourses();
    }, [token, id]);

    const onClickHandler = (courseid: number) => {
      updateCourseid({ courseid: courseid });
    };
    return (
      <>
        {isLoggedIn ? (
          <CourseContainer>
            {courses.map((course) => {
              return (
                <TranslationTopic
                  to={`/starter/translation/${course.id}`}
                  key={course.id}
                  onClick={() => {
                    onClickHandler(course.id);
                  }}
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
