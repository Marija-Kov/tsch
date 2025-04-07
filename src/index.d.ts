export type FormInputData = {
    from: StationName | undefined;
    to: StationName | undefined;
    date: YyyyMmDd | undefined;
    time: TimeOutput | undefined;
};

export type DepartureProps = DepartureOutput;

export type DepartureDetails = DepartureProps & {
    from: StationNameFormatted;
    to: StationNameFormatted;
};
// TODO: Ideally, there should be one FormProps that works for all repos.
// FormPropsAPIResponse shouldn't have to exist.

export type FormProps = {
    handleSetDepartures: (d: string | DepartureDetails[]) => void;
};
/**
 * Used when data is fetched from the API.
 */
export type FormPropsAPIResponse = {
    handleSetDepartures: (d: DeparturesResponseBody) => void;
};

export type InfoProps = {
    toggleAppInfoVisibility: () => void;
};

export type DeparturesResponseBody = {
    departureStation: StationNameFormatted;
    arrivalStation: StationNameFormatted;
    departures: DepartureOutput[];
} | { error: string };

export type DepartureOutput = {
    departureTime: TimeOutput;
    arrivalTime: TimeOutput;
    trainId: TrainIdDirection1 | TrainIdDirection2;
};

export type StationDetails = {
    name: StationName;
    nameFormatted: StationNameFormatted;
    departures: StationDepartureDetails[];
};
/**
 * Details of a departure relative to a station.
 */
export type StationDepartureDetails = { time: number; trainDetails: TrainDetails };

export type TrainDetails = {
    id: TrainIdDirection1 | TrainIdDirection2;
    directionId: DirectionId<
        TrainIdDirection1,
        TrainIdDirection2,
        TrainDetails["id"]
    >;
    activeOnWeekendsAndHolidays: boolean | "w&h_only";
};

export type DirectionId<T1, T2, Id extends T1 | T2> = Id extends T1 ? 1 : 2;

export type TrainItinerary = { station: StationName; time: number }[]; // TODO: be more specific about valid time number values

export type Train = TrainDetails & { itinerary: TrainItinerary };

export type TrainsMap = {
    [key in TrainIdDirection1 | TrainIdDirection2]: Train;
};

export type Station = {
    name: StationName;
    nameFormatted: StationNameFormatted;
    departures: StationDepartureDetails[];
};

export type YyyyMmDd = `${Year}-${Month}-${Day}`;
/**
 * Time format as it appears in JSON data.
 */
export type TimeInput = `${Hours}.${Minutes}` | "n/a";
/**
 * Time format as seen in the UI.
 */
export type TimeOutput = `${Hours}:${Minutes}` | "n/a";

export type StationName =
  | "batajnica"
  | "kamendin"
  | "zemunsko polje"
  | "altina"
  | "zemun"
  | "tosin bunar"
  | "novi beograd"
  | "beograd centar"
  | "karadjordjev park"
  | "vukov spomenik"
  | "pancevacki most"
  | "krnjaca most"
  | "krnjaca ukr"
  | "sebes"
  | "ovca";

export type StationNameFormatted =
  | "Batajnica"
  | "Kamendin"
  | "Zemunsko polje"
  | "Altina"
  | "Zemun"
  | "Tošin bunar"
  | "Novi Beograd"
  | "Beograd centar"
  | "Karađorđev park"
  | "Vukov spomenik"
  | "Pančevački most"
  | "Krnjača most"
  | "Krnjača ukr."
  | "Sebeš"
  | "Ovča";

export type TrainIdDirection1 =
  | 7101
  | 7901
  | 8001
  | 8003
  | 8201
  | 8005
  | 8007
  | 8009
  | 8011
  | 8013
  | 8015
  | 8203
  | 8017
  | 8019
  | 8021
  | 8023
  | 8025
  | 8027
  | 8029
  | 8031
  | 7113
  | 8033
  | 8035
  | 7905
  | 8037
  | 8039
  | 8041
  | 8043
  | 8045;

export type TrainIdDirection2 =
  | 8000
  | 7900
  | 8002
  | 8004
  | 8006
  | 8008
  | 8010
  | 8012
  | 8200
  | 8014
  | 8310
  | 8016
  | 8018
  | 8020
  | 8022
  | 8024
  | 8026
  | 7108
  | 8028
  | 8030
  | 8032
  | 7110
  | 8034
  | 8036
  | 8038
  | 8040
  | 8042
  | 8202
  | 8044
  | 7114
  | 8046
  | 8048
  | 7116
  | 8204
  | 8050
  | 8340;

export type Year = "2025";

export type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

export type Day =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31";

  export type Hours =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;

export type Minutes =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59;