import React from 'react';
import { Badge } from 'reactstrap';

export default function Sample({name}) {
        return <h2>Hello {name}, I am a React component that was rendered on the server <Badge color="primary">Wow</Badge></h2>;
}
