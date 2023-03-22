import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function Column({ column, tasks }: { column: any; tasks: any }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        mr: "15px",
        fontFamily: "inherit",
      }}
    >
      <Box sx={{ display: "flex", mb: "3px" }}>
        <Typography
          fontFamily="inherit"
          sx={{
            color: "#37474F",
            fontSize: "0.875rem",
          }}
        >
          {column.title}
        </Typography>
        <Box
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ECEFF1",
            marginLeft: "15px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "0.75rem",
              color: "#455964",
            }}
          >
            10
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F9FBFC",
          padding: "10px",
          borderRadius: "2px",
          border: "1px solid #CFD8DB",
          width: "250px",
          height: "400px",
        }}
      >
        <Droppable droppableId={column.id}>
          {(droppableProvided, droppableSnapShort) => (
            <Box
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {tasks.map((task: any, idx: any) => (
                <Draggable key={task.id} draggableId={`${task.id}`} index={idx}>
                  {(draggableProvided, draggableSnapShort) => (
                    <Box
                      sx={{
                        border: draggableSnapShort.isDragging
                          ? "1px solid gray"
                          : "1px solid #ECEFF1",
                        borderRadius: "2px",
                        paddingX: "4px",
                        py: " 8px",
                        backgroundColor: " #FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        mb: "5px",
                      }}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Typography
                        sx={{
                          fontFamily: "inherit",
                          fontWeight: 600,
                          color: "#253237",
                        }}
                      >
                        {task.name}
                      </Typography>
                      <Typography
                        sx={{ fontFamily: "inherit", color: "#798F9C" }}
                      >
                        {task.position}
                      </Typography>
                    </Box>
                  )}
                </Draggable>
              ))}
            </Box>
          )}
        </Droppable>
      </Box>
    </Box>
  );
}
