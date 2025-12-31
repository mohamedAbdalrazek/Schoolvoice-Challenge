import { gql, type TypedDocumentNode } from "@apollo/client";
import type { GetLeaderboardDataQuery} from "../utils/types";
import { useQuery } from "@apollo/client/react";

const GET_LEADERBOARD_DATA: TypedDocumentNode<GetLeaderboardDataQuery> = gql`
    query ExampleQuery {
        studentsLeaderboard(schoolId:1) {
            students {
                name {
                    en
                    ar
                }
                grade
                section
                points
                studentImage
                id
            }
            school {
                image
                name {
                    en
                    ar
                }
            }
    }
}
`
export default function useStudentsLeaderborad() {
    const { loading, error, data } = useQuery(GET_LEADERBOARD_DATA);

    return { loading, error, students: data?.studentsLeaderboard.students, school: data?.studentsLeaderboard.school }
}