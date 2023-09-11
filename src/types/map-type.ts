export interface MarkerType {
    position: Position;
    title: string;
}

interface Position {
    lat: number;
    lng: number;
}


export interface Project {
    projectName: string;
    position: {
        lat: number;
        lng: number;
    };
}

interface ConstructionType {
    [constructionType: string]: Project[];
}

export interface RegionData {
    [regionName: string]: {
        [constructionType: string]: Project[];
    };
}
