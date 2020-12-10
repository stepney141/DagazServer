Dagaz.Controller.persistense = "none";

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("sw");  // 0
    design.addDirection("nne"); // 1
    design.addDirection("sse"); // 2
    design.addDirection("e");   // 3
    design.addDirection("nw");  // 4
    design.addDirection("n");   // 5
    design.addDirection("een"); // 6
    design.addDirection("wwn"); // 7
    design.addDirection("se");  // 8
    design.addDirection("ees"); // 9
    design.addDirection("wws"); // 10
    design.addDirection("s");   // 11
    design.addDirection("nnw"); // 12
    design.addDirection("ssw"); // 13
    design.addDirection("w");   // 14
    design.addDirection("ne");  // 15

    design.addPlayer("White", [15, 13, 12, 14, 8, 11, 10, 9, 4, 7, 6, 5, 2, 1, 3, 0]);
    design.addPlayer("Black", [4, 2, 1, 3, 0, 11, 9, 10, 15, 6, 7, 5, 13, 12, 14, 8]);

    design.addPosition("i10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d10", [9, 0, 21, 1, 0, 0, 0, 0, 11, 12, 8, 10, 0, 19, 0, 0]);
    design.addPosition("e10", [9, 0, 21, 0, 0, 0, 0, 0, 11, 12, 8, 10, 0, 19, -1, 0]);
    design.addPosition("f10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [9, 0, 21, 1, 0, 0, -8, 0, 11, 12, 0, 10, 0, 19, 0, 0]);
    design.addPosition("c9", [9, 0, 21, 1, 0, 0, -8, 0, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("d9", [9, 0, 21, 1, 0, -10, 0, 0, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("e9", [9, 0, 21, 1, -11, -10, 0, 0, 11, 12, 8, 10, 0, 19, -1, 0]);
    design.addPosition("f9", [9, 0, 21, 1, -11, 0, 0, -12, 11, 12, 8, 10, 0, 19, -1, 0]);
    design.addPosition("g9", [9, 0, 21, 0, 0, 0, 0, -12, 11, 0, 8, 10, 0, 19, -1, 0]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 0, 21, 1, 0, 0, -8, 0, 11, 12, 0, 10, 0, 19, 0, -9]);
    design.addPosition("b8", [9, 0, 21, 1, 0, -10, -8, 0, 11, 12, 0, 10, 0, 19, -1, -9]);
    design.addPosition("c8", [9, -19, 21, 1, -11, -10, -8, 0, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("d8", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("e8", [9, 0, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f8", [9, 0, 21, 1, -11, -10, 0, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g8", [9, 0, 21, 1, -11, -10, 0, -12, 11, 0, 8, 10, 0, 19, -1, 0]);
    design.addPosition("h8", [9, 0, 21, 0, -11, 0, 0, -12, 0, 0, 8, 10, 0, 19, -1, 0]);
    design.addPosition("j8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [9, -19, 21, 1, 0, -10, -8, 0, 11, 12, 0, 10, 0, 19, 0, -9]);
    design.addPosition("b7", [9, -19, 21, 1, -11, -10, -8, 0, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("c7", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("d7", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("e7", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f7", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g7", [9, 0, 21, 1, -11, -10, 0, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("h7", [9, 0, 21, 0, -11, -10, 0, -12, 11, 0, 8, 10, -21, 19, -1, 0]);
    design.addPosition("j7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i6", [0, -19, 21, 1, 0, 0, -8, 0, 11, 12, 0, 10, 0, 0, 0, -9]);
    design.addPosition("a6", [9, -19, 21, 1, 0, -10, -8, 0, 11, 12, 0, 10, 0, 0, -1, -9]);
    design.addPosition("b6", [9, -19, 21, 1, -11, -10, -8, 0, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("c6", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("d6", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("e6", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f6", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g6", [9, -19, 21, 1, -11, -10, 0, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("h6", [9, 0, 0, 1, -11, -10, 0, -12, 11, 0, 8, 10, -21, 19, -1, 0]);
    design.addPosition("j6", [9, 0, 0, 0, -11, 0, 0, -12, 0, 0, 8, 10, -21, 19, -1, 0]);
    design.addPosition("i5", [0, -19, 21, 1, 0, -10, -8, 0, 11, 12, 0, 0, 0, 0, 0, -9]);
    design.addPosition("a5", [0, -19, 21, 1, -11, -10, -8, 0, 11, 12, 0, 10, 0, 0, -1, -9]);
    design.addPosition("b5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 0, 10, -21, 19, -1, -9]);
    design.addPosition("c5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("d5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("e5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("h5", [9, 0, 0, 1, -11, -10, 0, -12, 0, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("j5", [9, 0, 0, 0, -11, -10, 0, -12, 0, 0, 8, 0, -21, 19, -1, 0]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, -19, 21, 1, -11, -10, -8, 0, 11, 12, 0, 10, -21, 0, 0, -9]);
    design.addPosition("b4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 0, 10, -21, 0, -1, -9]);
    design.addPosition("c4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("d4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("e4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g4", [9, -19, 0, 1, -11, -10, -8, -12, 11, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("h4", [9, -19, 0, 0, -11, -10, 0, -12, 0, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("j4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, -19, 0, 1, 0, -10, -8, 0, 11, 12, 0, 0, -21, 0, 0, -9]);
    design.addPosition("b3", [0, -19, 0, 1, -11, -10, -8, 0, 11, 12, 0, 10, -21, 0, -1, -9]);
    design.addPosition("c3", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 0, 10, -21, 0, -1, -9]);
    design.addPosition("d3", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 0, -1, -9]);
    design.addPosition("e3", [9, -19, 0, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f3", [9, -19, 0, 1, -11, -10, -8, -12, 11, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g3", [9, -19, 0, 1, -11, -10, 0, -12, 0, 0, 8, 10, -21, 0, -1, -9]);
    design.addPosition("h3", [9, -19, 0, 0, -11, -10, 0, -12, 0, 0, 8, 0, -21, 0, -1, 0]);
    design.addPosition("j3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, -19, 0, 1, -11, -10, -8, 0, 0, 12, 0, 0, -21, 0, 0, -9]);
    design.addPosition("c2", [0, -19, 0, 1, -11, -10, -8, -12, 11, 12, 0, 0, -21, 0, -1, -9]);
    design.addPosition("d2", [0, -19, 0, 1, -11, -10, -8, -12, 11, 0, 0, 10, -21, 0, -1, -9]);
    design.addPosition("e2", [9, -19, 0, 1, -11, -10, -8, -12, 0, 0, 0, 10, -21, 0, -1, -9]);
    design.addPosition("f2", [9, -19, 0, 1, -11, -10, -8, -12, 0, 0, 8, 0, -21, 0, -1, -9]);
    design.addPosition("g2", [0, -19, 0, 0, -11, -10, 0, -12, 0, 0, 8, 0, -21, 0, -1, -9]);
    design.addPosition("h2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, -19, 0, 1, -11, -10, -8, -12, 0, 0, 0, 0, -21, 0, 0, -9]);
    design.addPosition("e1", [0, -19, 0, 0, -11, -10, -8, -12, 0, 0, 0, 0, -21, 0, -1, -9]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("full-promotion", 1, [40, 21, 12, 13, 4, 5, 16, 17, 28, 49]);
    design.addZone("full-promotion", 2, [50, 71, 82, 83, 94, 95, 86, 87, 78, 59]);
    design.addZone("third-rank", 1, [61, 62, 63, 64, 65, 66, 67, 68]);
    design.addZone("third-rank", 2, [31, 32, 33, 34, 35, 36, 37, 38]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.LITERAL,	1);	// Rook
    design.addCommand(6, ZRF.FUNCTION,	11);	// create
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	1);	// Rook
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.LITERAL,	1);	// Rook
    design.addCommand(7, ZRF.FUNCTION,	11);	// create
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	1);	// Rook
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 2, [4], 0);
    design.addMove(0, 2, [15], 0);
    design.addMove(0, 3, [3, 5, 5], 0);
    design.addMove(0, 3, [14, 5, 5], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 4, [5, 5], 0);
    design.addMove(1, 4, [11, 11], 0);
    design.addMove(1, 4, [14, 14], 0);
    design.addMove(1, 4, [3, 3], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 5, [1], 0);
    design.addMove(2, 5, [12], 0);
    design.addMove(2, 5, [2], 0);
    design.addMove(2, 5, [13], 0);
    design.addMove(2, 5, [6], 0);
    design.addMove(2, 5, [9], 0);
    design.addMove(2, 5, [7], 0);
    design.addMove(2, 5, [10], 0);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 4, [4, 4], 0);
    design.addMove(3, 4, [0, 0], 0);
    design.addMove(3, 4, [15, 15], 0);
    design.addMove(3, 4, [8, 8], 0);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 4, [5, 5], 0);
    design.addMove(4, 4, [11, 11], 0);
    design.addMove(4, 4, [14, 14], 0);
    design.addMove(4, 4, [3, 3], 0);
    design.addMove(4, 4, [4, 4], 0);
    design.addMove(4, 4, [0, 0], 0);
    design.addMove(4, 4, [15, 15], 0);
    design.addMove(4, 4, [8, 8], 0);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 5, [5], 0);
    design.addMove(5, 5, [11], 0);
    design.addMove(5, 5, [14], 0);
    design.addMove(5, 5, [3], 0);
    design.addMove(5, 5, [4], 0);
    design.addMove(5, 5, [0], 0);
    design.addMove(5, 5, [15], 0);
    design.addMove(5, 5, [8], 0);
    design.addMove(5, 6, [5, 3, 3], 1);
    design.addMove(5, 7, [5, 14, 14, 14], 1);

    design.setupSelector(3);

    design.setup("White", "Pawn", 71, 1);
    design.setup("White", "Pawn", 72, 1);
    design.setup("White", "Pawn", 73, 1);
    design.setup("White", "Pawn", 74, 1);
    design.setup("White", "Pawn", 75, 1);
    design.setup("White", "Pawn", 76, 1);
    design.setup("White", "Pawn", 77, 1);
    design.setup("White", "Pawn", 78, 1);
    design.setup("White", "Rook", 82, 1);
    design.setup("White", "Rook", 87, 1);
    design.setup("White", "Knight", 83, 1);
    design.setup("White", "Knight", 86, 1);
    design.setup("White", "Bishop", 84, 1);
    design.setup("White", "Bishop", 85, 1);
    design.setup("White", "Queen", 94, 1);
    design.setup("White", "King", 95, 1);
    design.setup("Black", "Pawn", 21, 1);
    design.setup("Black", "Pawn", 22, 1);
    design.setup("Black", "Pawn", 23, 1);
    design.setup("Black", "Pawn", 24, 1);
    design.setup("Black", "Pawn", 25, 1);
    design.setup("Black", "Pawn", 26, 1);
    design.setup("Black", "Pawn", 27, 1);
    design.setup("Black", "Pawn", 28, 1);
    design.setup("Black", "Rook", 12, 1);
    design.setup("Black", "Rook", 17, 1);
    design.setup("Black", "Knight", 13, 1);
    design.setup("Black", "Knight", 16, 1);
    design.setup("Black", "Bishop", 14, 1);
    design.setup("Black", "Bishop", 15, 1);
    design.setup("Black", "Queen", 4, 1);
    design.setup("Black", "King", 5, 1);

    design.reserve("White", "Knight", 2, 2);
    design.reserve("White", "King", 1, 2);
    design.reserve("Black", "King", 1, 2);

    design.setup("White", "Pawn", 71, 3);
    design.setup("White", "Pawn", 72, 3);
    design.setup("White", "Pawn", 73, 3);
    design.setup("White", "Pawn", 74, 3);
    design.setup("White", "Pawn", 75, 3);
    design.setup("White", "Pawn", 76, 3);
    design.setup("White", "Pawn", 77, 3);
    design.setup("White", "Pawn", 78, 3);
    design.setup("White", "Rook", 94, 3);
    design.setup("White", "Rook", 95, 3);
    design.setup("White", "Knight", 82, 3);
    design.setup("White", "Knight", 87, 3);
    design.setup("White", "Bishop", 83, 3);
    design.setup("White", "Bishop", 86, 3);
    design.setup("White", "Queen", 84, 3);
    design.setup("White", "King", 85, 3);
    design.setup("Black", "Pawn", 21, 3);
    design.setup("Black", "Pawn", 22, 3);
    design.setup("Black", "Pawn", 23, 3);
    design.setup("Black", "Pawn", 24, 3);
    design.setup("Black", "Pawn", 25, 3);
    design.setup("Black", "Pawn", 26, 3);
    design.setup("Black", "Pawn", 27, 3);
    design.setup("Black", "Pawn", 28, 3);
    design.setup("Black", "Rook", 4, 3);
    design.setup("Black", "Rook", 5, 3);
    design.setup("Black", "Knight", 12, 3);
    design.setup("Black", "Knight", 17, 3);
    design.setup("Black", "Bishop", 13, 3);
    design.setup("Black", "Bishop", 16, 3);
    design.setup("Black", "Queen", 14, 3);
    design.setup("Black", "King", 15, 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("i10", 452, 452, 50, 50);
    view.defPosition("a10", 402, 452, 50, 50);
    view.defPosition("b10", 352, 452, 50, 50);
    view.defPosition("c10", 302, 452, 50, 50);
    view.defPosition("d10", 252, 452, 50, 50);
    view.defPosition("e10", 202, 452, 50, 50);
    view.defPosition("f10", 152, 452, 50, 50);
    view.defPosition("g10", 102, 452, 50, 50);
    view.defPosition("h10", 52, 452, 50, 50);
    view.defPosition("j10", 2, 452, 50, 50);
    view.defPosition("i9", 452, 402, 50, 50);
    view.defPosition("a9", 402, 402, 50, 50);
    view.defPosition("b9", 352, 402, 50, 50);
    view.defPosition("c9", 302, 402, 50, 50);
    view.defPosition("d9", 252, 402, 50, 50);
    view.defPosition("e9", 202, 402, 50, 50);
    view.defPosition("f9", 152, 402, 50, 50);
    view.defPosition("g9", 102, 402, 50, 50);
    view.defPosition("h9", 52, 402, 50, 50);
    view.defPosition("j9", 2, 402, 50, 50);
    view.defPosition("i8", 452, 352, 50, 50);
    view.defPosition("a8", 402, 352, 50, 50);
    view.defPosition("b8", 352, 352, 50, 50);
    view.defPosition("c8", 302, 352, 50, 50);
    view.defPosition("d8", 252, 352, 50, 50);
    view.defPosition("e8", 202, 352, 50, 50);
    view.defPosition("f8", 152, 352, 50, 50);
    view.defPosition("g8", 102, 352, 50, 50);
    view.defPosition("h8", 52, 352, 50, 50);
    view.defPosition("j8", 2, 352, 50, 50);
    view.defPosition("i7", 452, 302, 50, 50);
    view.defPosition("a7", 402, 302, 50, 50);
    view.defPosition("b7", 352, 302, 50, 50);
    view.defPosition("c7", 302, 302, 50, 50);
    view.defPosition("d7", 252, 302, 50, 50);
    view.defPosition("e7", 202, 302, 50, 50);
    view.defPosition("f7", 152, 302, 50, 50);
    view.defPosition("g7", 102, 302, 50, 50);
    view.defPosition("h7", 52, 302, 50, 50);
    view.defPosition("j7", 2, 302, 50, 50);
    view.defPosition("i6", 452, 252, 50, 50);
    view.defPosition("a6", 402, 252, 50, 50);
    view.defPosition("b6", 352, 252, 50, 50);
    view.defPosition("c6", 302, 252, 50, 50);
    view.defPosition("d6", 252, 252, 50, 50);
    view.defPosition("e6", 202, 252, 50, 50);
    view.defPosition("f6", 152, 252, 50, 50);
    view.defPosition("g6", 102, 252, 50, 50);
    view.defPosition("h6", 52, 252, 50, 50);
    view.defPosition("j6", 2, 252, 50, 50);
    view.defPosition("i5", 452, 202, 50, 50);
    view.defPosition("a5", 402, 202, 50, 50);
    view.defPosition("b5", 352, 202, 50, 50);
    view.defPosition("c5", 302, 202, 50, 50);
    view.defPosition("d5", 252, 202, 50, 50);
    view.defPosition("e5", 202, 202, 50, 50);
    view.defPosition("f5", 152, 202, 50, 50);
    view.defPosition("g5", 102, 202, 50, 50);
    view.defPosition("h5", 52, 202, 50, 50);
    view.defPosition("j5", 2, 202, 50, 50);
    view.defPosition("i4", 452, 152, 50, 50);
    view.defPosition("a4", 402, 152, 50, 50);
    view.defPosition("b4", 352, 152, 50, 50);
    view.defPosition("c4", 302, 152, 50, 50);
    view.defPosition("d4", 252, 152, 50, 50);
    view.defPosition("e4", 202, 152, 50, 50);
    view.defPosition("f4", 152, 152, 50, 50);
    view.defPosition("g4", 102, 152, 50, 50);
    view.defPosition("h4", 52, 152, 50, 50);
    view.defPosition("j4", 2, 152, 50, 50);
    view.defPosition("i3", 452, 102, 50, 50);
    view.defPosition("a3", 402, 102, 50, 50);
    view.defPosition("b3", 352, 102, 50, 50);
    view.defPosition("c3", 302, 102, 50, 50);
    view.defPosition("d3", 252, 102, 50, 50);
    view.defPosition("e3", 202, 102, 50, 50);
    view.defPosition("f3", 152, 102, 50, 50);
    view.defPosition("g3", 102, 102, 50, 50);
    view.defPosition("h3", 52, 102, 50, 50);
    view.defPosition("j3", 2, 102, 50, 50);
    view.defPosition("i2", 452, 52, 50, 50);
    view.defPosition("a2", 402, 52, 50, 50);
    view.defPosition("b2", 352, 52, 50, 50);
    view.defPosition("c2", 302, 52, 50, 50);
    view.defPosition("d2", 252, 52, 50, 50);
    view.defPosition("e2", 202, 52, 50, 50);
    view.defPosition("f2", 152, 52, 50, 50);
    view.defPosition("g2", 102, 52, 50, 50);
    view.defPosition("h2", 52, 52, 50, 50);
    view.defPosition("j2", 2, 52, 50, 50);
    view.defPosition("i1", 452, 2, 50, 50);
    view.defPosition("a1", 402, 2, 50, 50);
    view.defPosition("b1", 352, 2, 50, 50);
    view.defPosition("c1", 302, 2, 50, 50);
    view.defPosition("d1", 252, 2, 50, 50);
    view.defPosition("e1", 202, 2, 50, 50);
    view.defPosition("f1", 152, 2, 50, 50);
    view.defPosition("g1", 102, 2, 50, 50);
    view.defPosition("h1", 52, 2, 50, 50);
    view.defPosition("j1", 2, 2, 50, 50);

    view.defPopup("Promote", 104, 112);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
}
