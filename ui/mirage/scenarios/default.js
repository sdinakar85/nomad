export default function(server) {
  server.createList('agent', 3);
  server.createList('node', 50);

  server.create('namespace', { id: 'default' });
  server.createList('namespace', 3);

  server.createList('job', 15);
}
