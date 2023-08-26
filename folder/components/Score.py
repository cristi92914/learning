from Component import *

class Score(Component):
    def __init__(self) -> None:
        # draw rectangle
        self.tlx = SCORE_TOP_LEFT[0] + GAME_DOWN_RIGHT[0] + PADDING
        self.tly = SCORE_TOP_LEFT[1] + TETROMINO_DOWN_RIGHT[1] + PADDING
        self.drx = SCORE_DOWN_RIGHT[0] - PADDING + GAME_DOWN_RIGHT[0]
        self.dry = SCORE_DOWN_RIGHT[1] - PADDING
        Component.__init__(self)
        