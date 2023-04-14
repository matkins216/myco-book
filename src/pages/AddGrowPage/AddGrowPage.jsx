import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import AddGrow from "../../components/AddGrow/AddGrow";

function AddGrowPage() {
  const [mushroomtype, setMushroomtype] = useState("");
  const [substrate, setSubstrate] = useState("");
  const [spawn, setSpawn] = useState("");
  const [inoculation, setInoculation] = useState("");

  function handleMushroomChange(e) {
    setMushroomtype(e.target.value);
  }

  function handleSubstrateChange(e) {
    setSubstrate(e.target.value);
  }

  function handleSpawnChange(e) {
    setSpawn(e.target.value);
  }
  function handleInoculationChange(e) {
    setInoculation(e.target.value);
  }


  function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("ingredients", ingredients);
    formData.append("directions", directions);
    formData.append("photo", photo);
    handleAddPost(formData);
  }

  return (
    <Paper>
      <AddGrow />
    </Paper>
  )



}

export default AddGrowPage;
