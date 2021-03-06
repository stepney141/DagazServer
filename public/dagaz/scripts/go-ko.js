(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ko") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var captured = [];
      _.each(move.actions, function(a) {
          if (a[0] == null) return;
          if (a[1] != null) return;
          captured.push(a[0][0]);
      });
      if (captured.length == 1) {
          var pos = move.actions[0][1][0];
          var v = board.getValue(2);
          if ((v !== null) && (v - 1 == pos)) {
              ko.push(pos);
              move.failed = true;
              return;
          }
          move.setValue(2, +captured[0] + 1);
          return;
      }
      move.setValue(2, null);
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
