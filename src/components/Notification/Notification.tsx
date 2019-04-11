import * as React from 'react';

import { Notification, Header, GreetingUser, NotificationCard, NotificationBodyMessage, NotificationBody, ListIcon } from  './NotificationStyles';

interface NotificationProps {}

const NotificationPresentation = ({}: NotificationProps) => {
    return (
        <Notification>
            <Header>
                NOTIFICATION CENTER
            </Header>
            <GreetingUser>
                <NotificationCard>
                    <NotificationBody>
                        <GreetingUser>
                            Good Morning, Artem!
                        </GreetingUser>
                        <NotificationBodyMessage>
                            You have no tasks due today.
                        </NotificationBodyMessage>
                    </NotificationBody>
                </NotificationCard>
            </GreetingUser>
            <ListIcon/>
        </Notification>
    )
};

export default NotificationPresentation;