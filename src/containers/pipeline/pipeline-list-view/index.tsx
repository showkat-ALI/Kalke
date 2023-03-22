import { Box, Typography } from "@mui/material";

import { DragDropContext } from "react-beautiful-dnd";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Screening = dynamic(() => import("./components/screening/index"), {
  ssr: false,
});
interface State {
  columns: { [id: string]: Column };
  candidates: { [id: number]: Candidate };
  columnOrder: string[];
}
interface Column {
  id: string;
  title: string;
  candidates: number[];
}
interface Candidate {
  name: string;
  stage: string;
  position: string;
  ratting: number;
  id: number;
  appliedDate: string;
  score: string;
}
const reorderColumnList = (
  sourceColumn: any,
  startIndex: any,
  endIndex: any
) => {
  const newTaskIds = Array.from(sourceColumn.candidates);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);
  const newColumn = {
    ...sourceColumn,
    candidates: newTaskIds,
  };
  return newColumn;
};
export default function PipelineListView() {
  // <Typography>Problem when building</Typography>;
  const [state, setState] = useState<State>(InitialData);
  const onDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    const sourceColumn = state.columns[source.droppableId];
    const destinationColumn = state.columns[destination.droppableId];

    if (sourceColumn.id === destinationColumn.id) {
      const newColumn = reorderColumnList(
        sourceColumn,
        source.index,
        destination.index
      );
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    const startCandidates = Array.from(sourceColumn.candidates);
    const [remove] = startCandidates.splice(source.index, 1);
    const newstartColumn = {
      ...sourceColumn,
      candidates: startCandidates,
    };

    let endCandidates = destinationColumn.candidates || []; // <-- initialize to an empty array
    endCandidates.splice(destination.index, 0, remove);
    const newEndColumn = {
      ...destinationColumn,
      candidates: endCandidates,
    };
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newstartColumn.id]: newstartColumn,
        [newEndColumn.id]: newEndColumn,
      },
    };
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1350px",
          overflowX: "auto",
          mt: "15px",
        }}
      >
        {state?.columnOrder?.map((columnId) => {
          // console.log(columnId);
          const column = state?.columns[columnId];
          const tasks = column?.candidates?.map(
            (candidateId: any) => state?.candidates[candidateId]
          );
          return <Screening key={column.id} column={column} tasks={tasks} />;
        })}
      </Box>
    </DragDropContext>
  );
}
const InitialData = {
  candidates: {
    1: {
      name: "Showkat ali",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 555,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    2: {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 2,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    3: {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 3,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    4: {
      name: "Sabbir 4",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 4,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    5: {
      name: "Sabbir5",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 5,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    6: {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 6,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    7: {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 7,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    8: {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 8,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    9: {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 9,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    10: {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 10,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
    11: {
      name: "Sabbir Hasan",
      stage: "Shortlisted",
      position: "Senior Product Designer",
      ratting: 2.85,
      id: 11,
      appliedDate: "16 Dec, 2022",
      score: "08",
    },
  },
  columns: {
    "1st": {
      id: "1st",
      title: "Short Listed",
      candidates: [1, 2, 11],
    },
    "2nd": {
      id: "2nd",
      title: "Screening",
      candidates: [4, 5],
    },
    "3rd": {
      id: "3rd",
      title: "Qualified",
      candidates: [3, 6],
    },
    "4th": {
      id: "4th",
      title: "Interviews",
      candidates: [7, 8],
    },
    "5th": {
      id: "5th",
      title: "Hired",
      candidates: [9, 10],
    },
  },
  columnOrder: ["1st", "2nd", "3rd", "4th", "5th"],
};
