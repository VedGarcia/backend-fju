export const isAdmin = ({ req: { user } }: { req: { user: { role?: string } | null } }) => user?.role === 'admin';

export const isAdminOrSubscriber = ({ req: { user } }: { req: { user: { role?: string } | null } }) => user?.role === 'admin' || user?.role === 'subscriber';