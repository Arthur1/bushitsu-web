import type { FC } from 'react'
import { format } from 'date-fns'

const Footer: FC = () => (
  <div className="text-center p-2 bg-gray-50">
    <div>
      <small>&copy; 2024 Arthur</small>
    </div>
    <div>
      <small>Last Modified: {format(new Date(), 'yyyy-MM-dd HH:mm:ss')}</small>
    </div>
  </div>
)

export default Footer
