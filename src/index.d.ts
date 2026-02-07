export type FormInputData = {
  from: StationName | undefined;
  to: StationName | undefined;
  date: YyyyMmDd | undefined;
  time: TimeOutput | undefined;
};

export type DepartureProps = DepartureOutput;

export type DepartureDetails = DepartureProps & {
  from: StationNameDisplay;
  to: StationNameDisplay;
};
// TODO: Ideally, there should be one FormProps that works for all repos.
// FormPropsAPIResponse shouldn't have to exist.

export type FormProps = {
  handleSetDepartures: (d: DepartureDetails[]) => void;
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
  departureStation: StationNameDisplay;
  arrivalStation: StationNameDisplay;
  departures: DepartureOutput[];
} | { error: string };

export type DepartureOutput = {
  departureTime: TimeOutput;
  arrivalTime: TimeOutput;
  trainId: TrainId;
};

export type StationDetails = {
  name: StationName;
  nameDisplay: StationNameDisplay;
  departures: StationDepartureDetails[];
};
/**
 * Details of a departure relative to a station.
 */
export type StationDepartureDetails = { time: number; trainDetails: TrainDetails };

export type TrainDetails = {
  id: TrainId;
  directionId: DirectionId<
    TrainIdDirection1,
    TrainIdDirection2,
    TrainDetails["id"]
  >;
  serviceFrequency: ServiceFrequency;
};

export type DirectionId<T1, T2, Id extends T1 | T2> = Id extends T1 ? 1 : 2;

export type TrainItinerary = { station: StationName; time: number }[]; // TODO: be more specific about valid time number values

export type Train = TrainDetails & { itinerary: TrainItinerary };

export type TrainsMap = {
  [key in TrainId]: Train;
};

export type Station = {
  name: StationName;
  nameDisplay: StationNameDisplay;
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

/**
 * ed - every day; wd - weekday only; wh - weekends and holidays only.
 */
export type ServiceFrequency = "ed" | "wd" | "wh";

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
  | "ovca"
  | "rakovica"
  | "knezevac"
  | "kijevo"
  | "resnik"
  | "lazarevac"
  | "vreoci"
  | "stepojevac"
  | "leskovac kolubarski"
  | "veliki borak"
  | "barajevo centar"
  | "barajevo ukr"
  | "bela reka"
  | "mladenovac"
  | "ripanj"
  | "ripanj kolonija"
  | "ripanj tunel"
  | "klenje"
  | "ralja"
  | "sopot kosmajski"
  | "vlasko polje";

export type StationNameDisplay =
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
  | "Ovča"
  | "Rakovica"
  | "Kneževac"
  | "Kijevo"
  | "Resnik"
  | "Lazarevac"
  | "Vreoci"
  | "Stepojevac"
  | "Leskovac Kolubarski"
  | "Veliki Borak"
  | "Barajevo Centar"
  | "Barajevo ukr."
  | "Bela reka"
  | "Mladenovac"
  | "Ripanj"
  | "Ripanj kolonija"
  | "Ripanj tunel"
  | "Klenje"
  | "Ralja"
  | "Sopot Kosmajski"
  | "Vlaško Polje";

export type TrainId = TrainIdDirection1 | TrainIdDirection2;

export type TrainIdDirection1 = TrainIdBatajnicaOvca | TrainIdZemunResnik | TrainIdOvcaResnikLazarevac | TrainIdOvcaZemunLazarevac | TrainIdOvcaZemunMladenovac;

export type TrainIdDirection2 = TrainIdOvcaBatajnica | TrainIdResnikZemun | TrainIdLazarevacResnikOvca | TrainIdLazarevacZemunOvca | TrainIdMladenovacZemunOvca;

// TODO: types for service frequency for directions

export type TrainIdBatajnicaOvca =
  7901 | 7101 | 8001 | 8003 | 8005 | 8007 | 8009 |
  8011 | 8013 | 8015 | 8017 | 8019 | 8021 | 8023 |
  8025 | 8027 | 8029 | 8031 | 8033 | 8035 | 8037 |
  8039 | 8041 | 8043 | 8045;

export type TrainIdOvcaBatajnica =
  8000 | 8002 | 8004 | 8006 | 8008 | 8010 | 8012 |
  8014 | 8016 | 8310 | 8018 | 8020 | 8022 | 8024 |
  8026 | 8028 | 8030 | 8032 | 8034 | 8036 | 8038 |
  8040 | 8042 | 8202 | 8044 | 8046 | 8048 | 7116 |
  8050 | 8340;

export type TrainIdZemunResnik = 7901 | 7101 | 8205 | 8207 | 8209;

export type TrainIdResnikZemun = 8307 | 8311 | 8202 | 7116;

export type TrainIdLazarevacResnikOvca =
  8301 | 7102 | 7902 | 8303 | 7104 | 8305 | 8307 |
  8309 | 8311 | 8315 | 8317 | 8319 | 8321 | 8323 |
  8325 | 8327 | 8329 | 8331 | 8333 | 7112 | 8335 |
  8202 | 7904 | 8337 | 7116 | 8339;

export type TrainIdOvcaResnikLazarevac =
  7901 | 7101 | 7103 | 8300 | 8302 | 8304 | 8306 |
  8308 | 8310 | 8205 | 8312 | 8207 | 8314 | 8316 |
  8318 | 8320 | 8322 | 7111 | 8209 | 7903 | 8324 |
  8326 | 8328 | 7115 | 8332 | 8334 | 8336 | 8338 |
  8340;

export type TrainIdOvcaZemunLazarevac = 7101 | 7103 | 7111 | 7115;

export type TrainIdLazarevacZemunOvca = 7102 | 7104 | 7112 | 7116;

export type TrainIdOvcaZemunMladenovac = 7901 | 7903;

export type TrainIdMladenovacZemunOvca = 7902 | 7904;

export type Year = "2026";

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