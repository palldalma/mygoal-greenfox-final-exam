import { FC, useState, useEffect } from "react";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { listCourses } from "../../services/translation-service";
import {
  hideLoadingSign,
  showLoadingSign,
} from "../../store/actions/loadingAction";
import {
  CourseContainer,
  TranslationTopic,
} from "../../styles/translation.styles";

export interface ListOfCoursesProps {
  updateCourseid: Function;
  loggedIn: boolean;
  level: string;
  token: string;
  id: string;
}

const ListOfCourses: FC<ListOfCoursesProps> = ({
  updateCourseid,
  loggedIn,
  level,
  token,
  id,
}) => {
  const [courses, setCourses] = useState([{ id: 0, name: "" }]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getMyCourses() {
      dispatch(showLoadingSign(`/${level}/tranlation`));
      await listCourses(id, token, level).then((data) => {
        if (data.courses) {
          setCourses(data.courses);
        }
      });
      dispatch(hideLoadingSign(`/${level}/tranlation`));
    }

    getMyCourses();
  }, []);

  const onClickHandler = (courseid: number) => {
    updateCourseid({ courseid: courseid });
  };
  return (
    <>
      {loggedIn ? (
        <CourseContainer>
          {courses.map((course) => {
            return (
              <TranslationTopic
                to={`/${level}/translation/${course.id}`}
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
          <Redirect to={{ pathname: "/users/login" }} />
        </CourseContainer>
      )}
    </>
  );
};

export default ListOfCourses;
