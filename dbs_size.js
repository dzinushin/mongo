db.adminCommand("listDatabases").databases
    .sort(function(l, r) {
         return r.sizeOnDisk - l.sizeOnDisk})
    .forEach(function(d) {
         print(d.name + " - " + d.sizeOnDisk/1000000)});
