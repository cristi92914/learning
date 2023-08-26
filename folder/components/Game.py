from Component import *

class Game(Component):
    def __init__(self) -> None:
        # draw rectangle
        self.tlx = GAME_TOP_LEFT[0] + PADDING
        self.tly = GAME_TOP_LEFT[1] + PADDING
        self.drx = GAME_DOWN_RIGHT[0] - PADDING
        self.dry = GAME_DOWN_RIGHT[1] - PADDING
        Component.__init__(self)
        
    def run(self) -> None:
        Component.run(self)
        # draw grid
        tly = self.tly + GRID_SQUARE_SIDE
        drx = self.block.bottomright[0]
        dry = self.block.bottomright[1]
        stop = dry - GRID_SQUARE_SIDE
        while tly <= stop:
            pygame.draw.line(self.surface, WHITE, (self.tlx, tly), (drx, tly), 2)
            tly += GRID_SQUARE_SIDE

        tly = self.tly + GRID_SQUARE_SIDE
        stop = dry - GRID_SQUARE_SIDE
        while tly <= stop:
            pygame.draw.line(self.surface, WHITE, (self.tlx, tly), (drx, tly), 2)
            tly += GRID_SQUARE_SIDE
