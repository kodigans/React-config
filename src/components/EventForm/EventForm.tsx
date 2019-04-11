import * as React from 'react';

import { EventFormWrapper, EventMainWrap, EventAccept, EventTitle } from "./EventFormStyle";

interface EventFormProps {};

const EventForm = ({}: EventFormProps) => {
  return (
    <EventFormWrapper>
        <EventMainWrap>
            <EventTitle placeholder='Event Title'/>
        </EventMainWrap>
        <EventAccept>
            asd
        </EventAccept>
    </EventFormWrapper>
  )
};

export default EventForm;