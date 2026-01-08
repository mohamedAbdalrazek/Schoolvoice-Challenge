import { gql, type TypedDocumentNode } from "@apollo/client";
import type { GetLeaderboardDataQuery} from "../utils/types";
import { useQuery } from "@apollo/client/react";

type SchoolID = number
const GET_LEADERBOARD_DATA: TypedDocumentNode<GetLeaderboardDataQuery, SchoolID> = gql`
    query getLeaderboard ($schoolId:SchoolID!){
        studentsLeaderboard(schoolId:$schoolId) {
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
    const { loading, error, data } = useQuery(GET_LEADERBOARD_DATA, {
        variables:{
            schoolId:1
        }
    });

    return { loading, error, students: data?.studentsLeaderboard.students, school: data?.studentsLeaderboard.school }
}