import React from "react";

//UI
import { Box, Button } from "../../Components/UI";

//info
import { extratoLista } from "../../info";

//Components
import Items from "../Items";

const Extract = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Button>Ver Mais</Button>
    </Box>
  );
};
export default Extract;