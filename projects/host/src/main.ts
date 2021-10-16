import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry('http://localhost:5001/remoteEntry.js', 'usersClient'),
  loadRemoteEntry('http://localhost:5002/remoteEntry.js', 'messagesClient')
])
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));