package repositories;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Repository;

import com.jma.programmer_fox_club.models.Fox;

@Repository
public class FoxRepository {
  private List<Fox> foxes;

  public FoxRepository() {
    foxes = new ArrayList<>();
  }

  public void addAFoxToFoxes(Fox foxToAdd) {
    this.foxes.add(foxToAdd);
  }

  public Fox findAFoxFromFoxes(String foxName) {
    return this.foxes.stream()
      .filter(fox -> fox.getName().equals(foxName))
      .collect(Collectors.toList()).get(0);
  }
}
