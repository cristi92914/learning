import pygame 
from settings import * 

class Component:
    def __init__(self) -> None:
        # draw rectangle
        self.surface = pygame.display.set_mode((APP_WIDTH,APP_HEIGHT))
        self.color = TETROMINO_COLOR
        self.drx = min(self.drx, APP_WIDTH - PADDING)
        self.dry = min(self.dry, APP_HEIGHT - PADDING)
        self.block = pygame.Rect(self.tlx, self.tly, self.drx, self.dry)
        
    def run(self) -> None:
        # draw rectangle
        pygame.draw.rect(self.surface, self.color, self.block)
