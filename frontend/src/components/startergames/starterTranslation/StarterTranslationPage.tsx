import { FC } from "react";
import {
  CourseContainer,
  TranslationTopic,
} from "../../../styles/translation.styles";

export interface StarterTranslationPagePropsProps {}

const StarterTranslationPageProps: FC<StarterTranslationPagePropsProps> =
  () => {
    const courses = {
      courses: [
        { id: 1, name: "course1" },
        { id: 2, name: "course2" },
        { id: 3, name: "course3" },
      ],
    };

    return (
      <CourseContainer>
        {courses.courses.map((course) => {
          return (
            <TranslationTopic to={`/starter/translation/:${course.id}`}>
              {course.name}
            </TranslationTopic>
          );
        })}
      </CourseContainer>
    );
  };

export default StarterTranslationPageProps;
