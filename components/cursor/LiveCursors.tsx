import { LiveCursorProps } from '@/types/type'
import Cursor from './Cursor';

const LiveCursors = ({ others }: LiveCursorProps) => {
    others.map(({ connectionId, presence }) => {
        if(!presence) return null;

        return (
            <Cursor
                key={connectionId}
            />
        )
    })
}

export default LiveCursors