export interface Event {
  'id': number;
  'caption': string;
  'type': string;
  'description': string;
  'closeTime': string;
  'startTime': string;
  'endTime': string;
  'link': string;
  'place': string;
  'canView': boolean;
  'canPlan': boolean;
  'canResult': boolean;
  'inPast': boolean;
  'inFuture': boolean;
}
