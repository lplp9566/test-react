import { useState, useEffect } from 'react';
import BuildingJson from "../data/building.json" 

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    
    setBuildingData(BuildingJson)
  }, [])
  

  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
 
    return buildingData[floorIndex]
  }
  const getListOfActivities = ():string[]=>{

    const getListOfActivities = buildingData.map((building)=>building.activity) 
    return getListOfActivities
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
