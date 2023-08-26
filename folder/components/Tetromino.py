from Component import *

class Tetromino(Component):
    def __init__(self) -> None:
        # draw rectangle
        self.tlx = TETROMINO_TOP_LEFT[0] + GAME_DOWN_RIGHT[0] + PADDING
        self.tly = TETROMINO_TOP_LEFT[1] + PADDING
        self.drx = TETROMINO_DOWN_RIGHT[0] - PADDING + TETROMINO_DOWN_RIGHT[0]
        self.dry = TETROMINO_DOWN_RIGHT[1] - PADDING
        Component.__init__(self)
